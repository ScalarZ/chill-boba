import styles from "../styles/App.module.css";

const changeTheme = (theme) => {
  switch (theme) {
    case "BoBa":
      return {
        iconsColor: "#916C42",
        slider: { stroke: "#916C42", track: "#FFDA81", fill: "#FFEBBB" },
        textColor: {
          primary: "#916C42",
          secondary: "#FFDA81",
        },
        backgroundColor: {
          primary: "#FFEBBB",
          secondary: "#916C42",
        },
        boxShadow: {
          a: "-4px -4px 8px rgb(255 255 255 / 70%), 4px 4px 8px #ffd777",
          b: "inset -2px -2px 4px rgb(255 255 255 / 70%), inset 2px 2px 4px #ffd777",
        },
        appBg: {
          name: { min: styles.Main_BoBa_Min, max: styles.Main_BoBa_Max },
          position: { min: "right top", max: "right top" },
        },
        listBg: {
          name: { min: styles.List_BoBa_Min, max: styles.List_BoBa_Max },
          position: { min: "left 40%", max: "left 65%" },
        },
        effects1: "dot.svg",
        effect2: {
          path: "BoBa",
          name: "boba3.png",
          position: { bottom: "0", right: "0" },
          size: { height: "106", width: "36" },
        },
        button: styles.BoBa_Switch,
      };
    case "SaKura":
      return {
        iconsColor: "#91425E",
        slider: { stroke: "#91425E", track: "#F889AA", fill: "#F7C8D6" },
        textColor: {
          primary: "#91425E",
          secondary: "#F889AA",
        },
        backgroundColor: {
          primary: "#F7C8D6",
          secondary: "#91425E",
        },
        boxShadow: {
          a: "-4px -4px 8px rgb(255 255 255 / 50%), 4px 4px 8px #FFA7C1",
          b: "inset -2px -2px 4px rgb(255 255 255 / 50%), inset 2px 2px 4px #FFA7C1",
        },
        appBg: {
          name: { min: styles.Main_SaKura_Min, max: styles.Main_SaKura_Max },
          position: { min: "bg-right-top", max: "bg-right-top" },
        },
        listBg: {
          name: { min: styles.List_SaKura_Min, max: styles.List_SaKura_Max },
          position: { min: "left top", max: "left 80%" },
        },
        effects1: "leaf.svg",
        effect2: {
          path: "SaKura",
          name: "sakura3.png",
          position: { bottom: "0", right: "0" },
          size: { height: "68", width: "74" },
        },
        button: styles.SaKura_Switch,
      };
    case "Bears":
      return {
        iconsColor: "#FFFFFF",
        slider: { stroke: "#FFFFFF", track: "#666666", fill: "#272727" },
        textColor: {
          primary: "#FFFFFF",
          secondary: "#666666",
        },
        backgroundColor: {
          primary: "#272727",
          secondary: "#FFFFFF",
        },
        boxShadow: {
          a: "-4px -4px 8px rgb(255 255 255 / 10%), 4px 4px 8px rgb(0 0 0 / 10%)",
          b: "inset -2px -2px 4px rgb(255 255 255 / 10%), inset 2px 2px 4px rgb(0 0 0 / 10%)",
        },
        appBg: {
          name: { min: styles.Main_Bears_Min, max: styles.Main_Bears_Max },
          position: { min: "bg-right-top", max: "bg-right-top" },
        },
        listBg: {
          name: { min: styles.List_Bears_Min, max: styles.List_Bears_Max },
          position: { min: "left 75%", max: "left 80%" },
        },
        effects1: "leaf.svg",
        effect2: { 
          path: "Bears",
          name: "bears4.png",
          position: { top: "0", right: "0" },
          size: { height: "78", width: "66" },
        },
        button: styles.Bears_Switch,
      };
    default:
      return;
  }
};

export default changeTheme;
