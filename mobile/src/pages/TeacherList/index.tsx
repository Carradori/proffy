import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  Picker,
  Platform,
  UIManager,
  FlatList,
  AsyncStorage,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Ionicons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import ModalSelector from "react-native-modal-selector";

import api from "../../services/api";
import Header from "../../components/Header";
import styles from "./styles";
import TeachersList, {
  Teacher,
} from "../../components/TeachersList/TeacherList";

interface ISubjects {
  id: number;
  title: string;
}
export default function TeacherList() {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  const [subjects, setSubjects] = useState<ISubjects[]>([]);
  const [time, setTime] = useState("");
  const [week_day, setWeekDay] = useState(0);
  const [subject, setSubject] = useState("");

  const [proffyList, setProffyList] = useState<Teacher[]>([]);

  const [favorited, setFavorited] = useState<number[]>([]);

  function handleAllFavorites() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        const teachers = JSON.parse(res);
        const teachersIds = teachers.map((teacher: Teacher) => teacher.id);
        setFavorited(teachersIds);
      }
    });
  }

  useEffect(() => {
    api
      .get("subjects")
      .then((res) => {
        setSubjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  async function handleSearchTeachers() {
    try {
      const response = await api.get("users", {
        params: {
          subject,
          week_day,
          time,
        },
      });
      setProffyList(response.data);
      setToggle(false);
      handleAllFavorites();
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => setError(""), 3000);
    }
  }

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={styles.container}>
      {error.length > 0 ? (
        <View style={styles.error}>
          <Text style={styles.errorTxt}>{error}</Text>
        </View>
      ) : null}
      <Header title="Proffys disponíveis">
        <View>
          <View style={{ borderBottomColor: "#9871F5", borderBottomWidth: 1 }}>
            <RectButton
              style={styles.select}
              onPress={() => {
                LayoutAnimation.configureNext({
                  duration: 700,
                  create: {
                    property: "opacity",
                    type: "linear",
                  },
                });
                setToggle(!toggle);
              }}
            >
              <Ionicons name="ios-funnel" size={25} color="#04D361" />
              <Text style={styles.selectTxt}>
                Filtrar por dia, hora e matéria
              </Text>
              <Ionicons name="ios-add" size={25} color="#d4c2ff" />
            </RectButton>
          </View>
          {toggle && (
            <View>
              <View>
                <Text style={styles.txt}>Matéria</Text>
                <View style={styles.custom}>
                  {Platform.OS === "ios" ? (
                    <ModalSelector
                      onChange={(e) => setSubject(e.label)}
                      initValue="Selecione a matéria"
                      data={subjects.map((s) => {
                        return { key: s.id, label: s.title };
                      })}
                    />
                  ) : (
                    <Picker
                      onValueChange={(e) => setSubject(e)}
                      selectedValue={subject}
                      prompt="Selecione a matéria"
                    >
                      {subjects.map((subject) => (
                        <Picker.Item
                          key={subject.id}
                          label={subject.title}
                          value={subject.title}
                          color="#C1BCCC"
                        />
                      ))}
                    </Picker>
                  )}
                </View>
              </View>
              <View style={styles.time}>
                <View style={styles.week}>
                  <Text style={styles.txt}>Dia da semana</Text>
                  <View style={styles.custom}>
                    {Platform.OS === "ios" ? (
                      <ModalSelector
                        data={[
                          { key: 0, label: "Segunda-feira" },
                          { key: 1, label: "Terça-feira" },
                          { key: 2, label: "Quarta-feira" },
                          { key: 3, label: "Quinta-feira" },
                          { key: 4, label: "Sexta-feira" },
                        ]}
                        onChange={(e) => setWeekDay(e.key)}
                      />
                    ) : (
                      <Picker
                        onValueChange={(e) => setWeekDay(e)}
                        selectedValue={week_day}
                        prompt="Selecione o dia da semana"
                      >
                        <Picker.Item
                          label="Segunda-feira"
                          value="0"
                          color="#C1BCCC"
                        />
                        <Picker.Item
                          label="Terça-feira"
                          value="1"
                          color="#C1BCCC"
                        />
                        <Picker.Item
                          label="Quarta-feira"
                          value="2"
                          color="#C1BCCC"
                        />
                        <Picker.Item
                          label="Quinta-feira"
                          value="3"
                          color="#C1BCCC"
                        />
                        <Picker.Item
                          label="Sexta-feira"
                          value="4"
                          color="#C1BCCC"
                        />
                      </Picker>
                    )}
                  </View>
                </View>
                <View style={styles.hour}>
                  <Text style={styles.txt}>Horário</Text>
                  <TextInputMask
                    onChangeText={(e) => setTime(e)}
                    value={time}
                    type={"custom"}
                    options={{
                      mask: "99:99",
                    }}
                    placeholder="Selecione o horário"
                    style={styles.input}
                  />
                </View>
              </View>
              <RectButton
                style={styles.btnSearch}
                onPress={handleSearchTeachers}
              >
                <Text style={styles.btnTxt}>Pesquisar</Text>
              </RectButton>
            </View>
          )}
        </View>
      </Header>
      {proffyList.length > 0 ? (
        <FlatList
          data={proffyList}
          style={{
            marginTop: -35,
          }}
          contentContainerStyle={{
            padding: 15,
          }}
          renderItem={({ item }) => (
            <TeachersList
              teacher={item}
              favorited={favorited.includes(item.id)}
            />
          )}
          keyExtractor={(item, i) => item.id.toString()}
        />
      ) : null}
    </View>
  );
}
