import React from "react";

const styles = {
  body: {
    position: "fixed",
    minHeight: "100vh",
    zIndex: "100000",
    top: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    display: "flex",
    flex: "1",
    // backgroundColor: "red",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    minheight: "40px",
    width: "300px",
    maxWidth: "90vw",
    color: "#121212",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px 30px 10px",
    boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
  },
  dropDown: {
    top: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  bar: {
    height: "40px",
    width: "100%",
    backgroundColor: "#2c2d3f",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#a7cc48",
    padding: "5px 30px",
    border: "none",
    fontSize: "16px",
    outline: "none",
  }, 
};
const Modal = ({ state, setState }) => {
  return (
    <>
      {state.state ? (
        <div style={styles.body} onClick={() => setState(false)}>
          <div className="container">
            <div style={styles.content}>
              <div style={styles.item}>
                <div style={styles.bar}>{state.type==='success' ? 'Thank you' : 'Error'}</div>
                <p className="mt-4 mb-4">{state.msg}</p>
                <button style={styles.button} onClick={() => setState({state:false,msg:'',type:''})}>
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
