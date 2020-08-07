import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    borderColor: "#e6e6f0",
    borderWidth: 1,
    borderRadius: 8,

    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    backgroundColor: "#eee",
    
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    fontSize: 20,
  },

  subject: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 12,
    
    marginTop: 4,
  },

  bio: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#6a6180",
    
    marginHorizontal: 24,
  },

  footer: {
    alignItems: "center",
    
    backgroundColor: "#fafafc",
    
    padding: 24,
    marginTop: 24,
  },

  cost: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 14,
  },

  costNumber: {
    fontFamily: "Archivo_700Bold",
    color: "#8257e5",
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  favoriteButton: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#8257e5",
    
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 8,
  },

  contactButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#04d361",
    borderRadius: 8,
    
    marginRight: 8,
  },

  contactButtonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 16,

    marginLeft: 16,
  },

  favorited: {
    backgroundColor: "#e33d3d",
  }
});

export default styles;
