const style = {
  container: {
    display: "flex",
    alignItems: ({center, align}) => center ? "center" : align,
    justifyContent: ({center, justify}) => center ? "center" : justify,
    flexDirection: ({column}) => column ? "column" : "row"
  }
}

export default style;