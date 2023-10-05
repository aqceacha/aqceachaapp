import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "flex-end",
        
      },
      modalView: {
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 25,
        shadowColor: "#FAFAFA",
        maxHeight: 400,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1
      },
      topo: {
        flexDirection: "row",
        borderBottomColor: 'black',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        justifyContent: 'center'
      },
      modalText: {
        alignSelf: "center",
        fontSize: 20,
        fontFamily: 'Inter_600SemiBold'
      },
      conteudo: {
        marginTop: 16,
        marginBottom: 16,
        flexDirection: "column",
      },
      contatar: {
        backgroundColor: "#AFBEE3",
        borderRadius: 30,
        paddingHorizontal: 40,
        alignItems: 'center',
        marginLeft: 8
      },
      item: {
        flexDirection: 'row', 
        borderBottomColor: '#BBB6B6',
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingTop: 8
      },
      text:{
        fontFamily: 'Inter_400Regular',
        alignSelf: 'center',
        marginLeft: 100,
      },
});