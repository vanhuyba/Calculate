import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    navigation: any;
}

const operations = ['DEL', '+', '-', '*', '/']

const CalculateScreen = (props: Props) => {
    const { navigation } = props;
    const [resultText, setResultText] = useState("");
    const [calculationText, setCalculationText] = useState("");
    const [currentTab, setCurrentTab] = useState(1);
    const [dataResult, setDataResult] = useState([]);

    const calculateResult = () => {
        const text = resultText
        setResultText(eval(text))
        let arr = dataResult
        arr.push({
            res: resultText,
            total: eval(text)
        })
        setDataResult(arr)

        saveAsyncStorage(arr)
    }

    const saveAsyncStorage = async (item: any[]) => {
        try {
          await AsyncStorage.setItem('res', JSON.stringify(item));
        } catch (error) {
          console.log('error :>> ', error);
        }
      };

    const validate = () => {
        const text = resultText
        switch (text.slice(-1)) {
            case '+':
            case '-':
            case '*':
            case '/':
                return false
        }
        return true
    }

    const buttonPressed = (text) => {
        if (text == "=") {
            return validate() && calculateResult()
        }
        setResultText(resultText + text)
    }

    const operate = (operation) => {
        let resultString = resultText.toString()
        switch (operation) {
            case 'DEL':
                let text = resultString.split('')
                text.pop()
                setResultText(text.join(''))
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                const lastChar = resultString.split('').pop()
                if (operations.indexOf(lastChar) > 0) return

                if (resultText == "") return
                setResultText(resultText + operation)
        }
    }

    const rows = () => {
        let rows = []
        let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
        let i = 0
        let j = 0
        for (i = 0; i < 4; i++) {
            let row = []
            for (j = 0; j < 3; j++) {
                let textValue = nums[i][j]
                row.push(
                    <TouchableOpacity key={textValue} onPress={() => buttonPressed(textValue)} style={styles.btn}>
                        <Text style={[styles.btnText, styles.white]}>{textValue}</Text>
                    </TouchableOpacity>
                )
            }
            rows.push(
                <View style={styles.row}>{row}</View>
            )
        }
        return rows
    }

    const ops = () => {
        let ops = []
        let i = 0;
        for (i = 0; i < 5; i++) {
            let symboles = operations[i]
            ops.push(
                <TouchableOpacity key={symboles} style={styles.btn} onPress={() => operate(symboles)}>
                    <Text style={[styles.btnText, styles.white]}>{symboles}</Text>
                </TouchableOpacity>
            )
        }
        return ops
    }

    const showView = (item: number) => {
        setCurrentTab(item)
    }

    const calculate = () => {
        return (
            <>
                <View style={styles.result}>
                    <Text style={styles.resultText}>
                        {resultText}
                    </Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>
                        {calculationText}
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows()}
                    </View>
                    <View style={styles.operations}>
                        {ops()}
                    </View>
                </View>
            </>
        )
    }

    const result = () => {
        return (
            <View style={styles.resultView}>
                {dataResult.map((item) => {
                    return (
                        <View style={styles.viewChilder}>
                            <View style={styles.view1}>
                                <Text style={styles.fontSizeView}>
                                    {item.res}
                                </Text>
                            </View>
                            <View style={styles.view2}>
                                <Text style={styles.fontSizeView1}>
                                    {item.total}
                                </Text>
                            </View>
                        </View>
                    )

                })}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {currentTab === 1 ? calculate() : result()}
            <View style={styles.viewTab}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => showView(1)}>
                    <Text style={styles.textBtn}>Calculate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => showView(2)}>
                    <Text style={styles.textBtn}>Result</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default CalculateScreen;
