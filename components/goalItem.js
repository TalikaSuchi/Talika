import React from 'react';
import * as Progress from 'react-native-progress';
import { View, Text, StyleSheet, TouchableOpacity, ListViewComponent } from 'react-native';
import Elevation from "react-native-elevation";





let colorArr = ["#277da1","#577590","#4d908e","#43aa8b","#90be6d","#f9c74f","#f9844a","#f8961e","#f3722c","#f94144","#6c757d","#121212"]





 export default function GoalItem (props) {
     //Calculates a percentage value based on the time
    let now = Date.now();
    let start = props.startDate;
    let end = props.endDate;
    let percent;
    if (now > end) { percent = 1 }
    else if (now < end && now > start) {
        percent = 1 - (Math.abs((end - now) / (end - start)));
    }
    else { percent = 0 }
//end

    const progress = () => {
       
        if (props.startDate > (new Date(1991, 0, 0, 0, 0)) || props.endDate > (new Date(1992, 0, 0, 0, 0)) ) {
            return(
                
            <View>
                   {DateDynamic()}
                <View>
                            {/* For the progress bar title  */}
                                <View>
                                    { TimesDynamic()}
                                </View>
                    
                    
                    <Progress.Bar color={colorGradientRender(percent)} animationType={"timing"} progress={TimePercent()} width={200} />

                </View>


            </View>);
            }
    }

    const DateDynamic = () =>
    {
        if(props.startDate.getDay() == props.endDate.getDay())
        {   
            return(
            <View style={styles.title}>
                        <View style={{ flex: 1 }} >
                            <Text style={{color:colorArr[0]}} > {props.startDate.getHours()}:{props.startDate.getMinutes()},O'Clock </Text>
                        </View>


                        <View style={{ flex: 1 }} >

                            <Text style={{color:colorArr[9]}} >{props.endDate.getHours()}:{props.endDate.getMinutes()},O'Clock </Text>
                        
                        </View>

            </View>
            );
        }
        else if ( props.startDate.getDate() < props.endDate.getDate() &&  ( props.endDate.getDate() - props.startDate.getDate() ) <= 6 )
        {
            return(
                <View style={styles.title}>
                        <View style={{ flex: 1 }} >
                            <Text style={{color:colorArr[0]}} > {dayWord(props.startDate.getDay())} {props.startDate.getHours()}:{props.startDate.getMinutes()} </Text>
                        </View>


                        <View style={{ flex: 1 }} >

                            <Text style={{color:colorArr[9]}} > {dayWord(props.endDate.getDay())} {props.endDate.getHours()}:{props.endDate.getMinutes()} </Text>
                        
                        </View>

                </View>

            );
        }

        else if ( props.startDate.getDate() < props.endDate.getDate() &&  ( props.endDate.getDate() - props.startDate.getDate() ) > 6 ){
        {
            return(
                <View style={props.BGstyle.title}>
                        <View style={{ flex: 1 }} >
                            <Text style={{color:colorArr[0]}} > {props.startDate.getDate()} {dayWord(props.startDate.getDay())} {props.startDate.getHours()}:{props.startDate.getMinutes()} </Text>
                        </View>


                        <View style={{ flex: 1 }} >

                            <Text style={{color:colorArr[9]}} > {props.endDate.getDate()} {dayWord(props.endDate.getDay())} {props.endDate.getHours()}:{props.endDate.getMinutes()} </Text>
                        
                        </View>

                </View>

            );
        }
    }


    }


    const TimesDynamic = ()=>{
        let color = colorGradientRender(percent,colorArr);
        if(TimePercent() == 1){return(
    <Text style={{color: color,fontWeight:"bold"}}>Time's Up</Text>
        );
        }
        else{return(<Text style={{color: color,fontWeight:"bold"}}>Tic toc</Text>);}
    }


    const colorGradientRender = (per,colAr = ["#277da1","#577590","#4d908e","#43aa8b","#90be6d","#f9c74f","#f9844a","#f8961e","#f3722c","#f94144","#6c757d","#121212"]) =>
    {
        per = per*100;
       let colCount = colAr.length - 1;
       let cell = colCount-1;
       let TotalCellPer = 100/cell;
       let firstCol = Math.floor((per/TotalCellPer));
       let secCol = firstCol + 1;
       let cellPer = Number(((per%TotalCellPer) ).toFixed(2).substring(2)) ;
       let color;
       let upRGB = hexToRgb( colAr[firstCol] );
       let lowRGB = hexToRgb( colAr[secCol] );
       // color = colorArr[colorIndex];
       // let colorIndex = Math.floor(per*10);
       color = timeGradient(lowRGB.r,upRGB.r,lowRGB.g,upRGB.g,lowRGB.b,upRGB.b,cellPer);
       
       return(color);
   
    }



    const TimePercent = () => {

        return percent;
        
    }



    return (

        <TouchableOpacity activeOpacity={0.4}  >

            <View style={props.BGstyle.task}>
                           
                            <View style={{ flex: 1 }}>
                                <Text style={{color:props.BGstyle.textcol.color,fontSize:20,marginBottom:10}} >{props.title}</Text>
                            </View>

                            <View>
                                {progress()}
                            </View>

                    <View style={styles.title2} >


                            <View style={{ alignSelf:"center",marginTop:15 }}>
                                    <Text style={{color:props.BGstyle.textcol.color,fontSize:10,}} > {props.desc}</Text>
                            </View>

                    </View>

            </View>
            
        </TouchableOpacity>

    );
}

let dayDict = { 0: 'Sun', 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" };

const dayWord = (day) => dayDict[day];

function hexToRgb (hex){return{r:'0x'+hex[1]+hex[2]|0,g:'0x'+hex[3]+hex[4]|0,b:'0x'+hex[5]+hex[6]|0}}


    // const percentColor = (col1,col2,per) =>
    // {
    //     let color;

    //     let lowRGB = hexToRgb(col1);
    //     let upRGB = hexToRgb(col2);

    //     // let colorIndex = Math.floor(per*10);
    //     // color = colorArr[colorIndex];
    //     color = timeGradient(lowRGB.r,upRGB.r,lowRGB.g,upRGB.g,lowRGB.b,upRGB.b,per);
            
    //     return(color);
    // }






const timeGradient =(r1,r2,g1,g2,b1,b2,percent) =>{
    // percent = percent*100;
    var r = r1 + (percent*(r2-r1)/100);
    var g = g1 + (percent*(g2-g1)/100);
    var b = b1 + (percent*(b2-b1)/100);
    return `rgb(${r},${g},${b})`;
}

const styles = StyleSheet.create({
    task:
    {
        justifyContent: 'center',
        alignItems: "center",
        minWidth: "90%",
        padding: 10,
        margin: 4,
        borderBottomColor: 'grey',
        borderWidth: 2,
        borderBottomWidth: 0,
        borderRadius: 20,
        backgroundColor: "#f2effe",
        ...Elevation[3],
    },
    title:
    {
        justifyContent: 'space-between',
        alignItems: "baseline",
        flexDirection: "row",
        paddingBottom: 5,


    },
    title2:
    {
        justifyContent: 'center',
        alignItems: "baseline",
        flexDirection: "column",
        paddingBottom: 5,
        width: "95%",
        alignContent: "center",

    },
    textcol: {
        fontWeight: 'bold',
        
        color: '#373a40',
    },
    themeCol: {
        color: '#0e918c',
        
        fontWeight: 'bold',
    },

});

