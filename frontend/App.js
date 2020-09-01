import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Row from "./App/components/Row";
import Button from "./App/components/Button";
import {
  add,
  subtract,
  multiply,
  divide,
} from "./App/services/calculator-service";

export default function App() {
  const [currVal, setCurrVal] = useState("0");
  const [prevVal, setPrevVal] = useState(null);
  const [operator, setOperator] = useState(null);
  const [opComplete, setOpComplete] = useState(true);

  handleTap = async (type, value) => {
    if (type === "number") {
      if (parseFloat(currVal) === 0 || opComplete) {
        setCurrVal(`${value}`);
      } else {
        setCurrVal(`${currVal}${value}`);
      }

      setOpComplete(false);
    }

    if (type === "operator") {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal("0");
    }

    if (type === "clear") {
      setCurrVal("0");
      setOperator(null);
      setPrevVal(null);
    }

    if (type === "posneg") {
      setCurrVal(`${parseFloat(currVal) * -1}`);
    }

    if (type === "percentage") {
      setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }

    if (type === "equal") {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if (operator === "+") {
        const value = await add(previous, current);
        setCurrVal(value);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "/") {
        const value = await divide(previous, current);
        setCurrVal(value);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "-") {
        const value = await subtract(previous, current);
        setCurrVal(value);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "*") {
        const value = await multiply(previous, current);
        setCurrVal(value);
        setOperator(null);
        setPrevVal(null);
      }

      setOpComplete(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>{currVal}</Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => this.handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => this.handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => this.handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => this.handleTap("operator", "/")}
          />
        </Row>
        <Row>
          <Button text="7" onPress={() => this.handleTap("number", 7)} />
          <Button text="8" onPress={() => this.handleTap("number", 8)} />
          <Button text="9" onPress={() => this.handleTap("number", 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => this.handleTap("operator", "*")}
          />
        </Row>
        <Row>
          <Button text="4" onPress={() => this.handleTap("number", 4)} />
          <Button text="5" onPress={() => this.handleTap("number", 5)} />
          <Button text="6" onPress={() => this.handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => this.handleTap("operator", "-")}
          />
        </Row>
        <Row>
          <Button text="1" onPress={() => this.handleTap("number", 1)} />
          <Button text="2" onPress={() => this.handleTap("number", 2)} />
          <Button text="3" onPress={() => this.handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => this.handleTap("operator", "+")}
          />
        </Row>
        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => this.handleTap("number", 0)}
          />
          <Button text="." onPress={() => this.handleTap("number", ".")} />
          <Button
            text="="
            theme="accent"
            onPress={() => this.handleTap("equal")}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
