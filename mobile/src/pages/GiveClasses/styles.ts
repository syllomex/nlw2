import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    padding: 40,

    backgroundColor: "#8257e5",
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",

    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",

    fontSize: 16,
    lineHeight: 26,
    
    marginTop: 24,
    maxWidth: 240,
  },

  okButton: {
    backgroundColor: "#04d361",
    alignItems: "center",
    justifyContent: "center",
    
    marginVertical: 40,
    height: 58,
    borderRadius: 8,
  },

  okButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  }
});

export default styles;
