import React, { useState } from "react";
import { Formik } from "formik";

const Form = () => {
  const [formSent, setFormSent] = useState(false);
  const [numCaracter, setNumCaracter] = useState(false);
  const [lowerCaracter, setLowerCaracter] = useState(false);
  const [upperCaracter, setUpperCaracter] = useState(false);
  const [caractersConsecutives, setCaractersConsecutives] = useState(false);
  const [spaces, setSpaces] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [countNumers, setCountNumers] = useState(false);
  const [number0, setNumber0] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          password: "",
        }}
        validate={(values) => {
          let sumNumber = 0;
          let sumCharacter = 0;
          let sumLowerCharacter = 0;
          let sumUpperCharacter = 0;
          let arraEspecialsCharacters = [];
          let arrayComparation = [];
          let errores = {};

          if (!values.password) {
            errores.password = "Por favor ingresa un password";
          }

          if (values.password.length < 16) {
            errores.password = "El password debe tener al menos 16 caracteres";
            setNumCaracter(false);
          } else {
            setNumCaracter(true);
          }

          for (let index = 0; index < values.password.length; index++) {
            arrayComparation.push(values.password.charAt(index));
            if (arrayComparation[index] === arrayComparation[index - 1]) {
              errores.password =
                "La password no debe contener dos caracteres o numeros iguales consecutivos";
              setCaractersConsecutives(false);
            } else {
              setCaractersConsecutives(true);
            }

            if (
              arrayComparation[index] === "a" ||
              arrayComparation[index] === "b" ||
              arrayComparation[index] === "c" ||
              arrayComparation[index] === "d" ||
              arrayComparation[index] === "e" ||
              arrayComparation[index] === "f" ||
              arrayComparation[index] === "g" ||
              arrayComparation[index] === "h" ||
              arrayComparation[index] === "i" ||
              arrayComparation[index] === "j" ||
              arrayComparation[index] === "k" ||
              arrayComparation[index] === "l" ||
              arrayComparation[index] === "m" ||
              arrayComparation[index] === "n" ||
              arrayComparation[index] === "o" ||
              arrayComparation[index] === "p" ||
              arrayComparation[index] === "q" ||
              arrayComparation[index] === "r" ||
              arrayComparation[index] === "s" ||
              arrayComparation[index] === "t" ||
              arrayComparation[index] === "u" ||
              arrayComparation[index] === "v" ||
              arrayComparation[index] === "w" ||
              arrayComparation[index] === "x" ||
              arrayComparation[index] === "y" ||
              arrayComparation[index] === "z"
            ) {
              sumLowerCharacter = sumLowerCharacter + 1;
            }

            if (
              arrayComparation[index] === "A" ||
              arrayComparation[index] === "B" ||
              arrayComparation[index] === "C" ||
              arrayComparation[index] === "D" ||
              arrayComparation[index] === "E" ||
              arrayComparation[index] === "F" ||
              arrayComparation[index] === "G" ||
              arrayComparation[index] === "H" ||
              arrayComparation[index] === "I" ||
              arrayComparation[index] === "J" ||
              arrayComparation[index] === "K" ||
              arrayComparation[index] === "L" ||
              arrayComparation[index] === "M" ||
              arrayComparation[index] === "N" ||
              arrayComparation[index] === "O" ||
              arrayComparation[index] === "P" ||
              arrayComparation[index] === "Q" ||
              arrayComparation[index] === "R" ||
              arrayComparation[index] === "S" ||
              arrayComparation[index] === "T" ||
              arrayComparation[index] === "U" ||
              arrayComparation[index] === "V" ||
              arrayComparation[index] === "W" ||
              arrayComparation[index] === "X" ||
              arrayComparation[index] === "Y" ||
              arrayComparation[index] === "Z"
            ) {
              sumUpperCharacter = sumUpperCharacter + 1;
            }

            if (
              arrayComparation[index] === "1" ||
              arrayComparation[index] === "2" ||
              arrayComparation[index] === "3" ||
              arrayComparation[index] === "4" ||
              arrayComparation[index] === "5" ||
              arrayComparation[index] === "6" ||
              arrayComparation[index] === "7" ||
              arrayComparation[index] === "8" ||
              arrayComparation[index] === "9"
            ) {
              sumNumber = sumNumber + 1;
            }

            if (
              arrayComparation[index] === "!" ||
              arrayComparation[index] === "@" ||
              arrayComparation[index] === "#" ||
              arrayComparation[index] === "$" ||
              arrayComparation[index] === "%" ||
              arrayComparation[index] === "^" ||
              arrayComparation[index] === "&" ||
              arrayComparation[index] === "*" ||
              arrayComparation[index] === "-" ||
              arrayComparation[index] === "_" ||
              arrayComparation[index] === "+" ||
              arrayComparation[index] === "=" ||
              arrayComparation[index] === "?"
            ) {
              sumCharacter = sumCharacter + 1;
              arraEspecialsCharacters.push(values.password.charAt(index));
            }
          }

          if (sumUpperCharacter < 1) {
            errores.password = "El password debe tener al una letra mayúscula";
            setUpperCaracter(false);
          } else {
            setUpperCaracter(true);
          }

          if (sumLowerCharacter < 1) {
            errores.password = "El password debe tener al una letra minúcula";
            setLowerCaracter(false);
          } else {
            setLowerCaracter(true);
          }

          if (sumNumber < 4) {
            errores.password = "La password  debe contener al menos 4 numeros";
            setCountNumers(false);
          } else {
            setCountNumers(true);
          }

          if (sumCharacter < 2) {
            errores.password =
              "La password  debe contener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?)";
            setSpecialCharacters(false);
          } else {
            setSpecialCharacters(true);
          }

          if (arrayComparation.includes("0")) {
            errores.password = "La password no debe contener el número 0";
            setNumber0(false);
          } else {
            setNumber0(true);
          }

          if (arrayComparation.includes(" ")) {
            errores.password = "La password no debe contener espacios";
            setSpaces(false);
          } else {
            setSpaces(true);
          }

          return errores;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          setFormSent(true);
        }}
      >
        {({
          handleSubmit,
          errors,

          values,
          handleChange,
          handleBlur,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="escribe tu password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>

            <button type="submit">Enviar</button>
            {formSent ? (
              <p className="exito">Formulario enviado!</p>
            ) : (
              <>
                {" "}
                {numCaracter ? (
                  <li style={{ color: "green" }}>
                    Debe tener al menos 16 caracteres.
                  </li>
                ) : (
                  <li style={{ color: "red" }}>
                    Debe tener al menos 16 caracteres.
                  </li>
                )}
                {lowerCaracter ? (
                  <li style={{ color: "green" }}>
                    Debe tener letras minúsculas
                  </li>
                ) : (
                  <li style={{ color: "red" }}>Debe tener letras minúsculas</li>
                )}
                {upperCaracter ? (
                  <li style={{ color: "green" }}>
                    Debe tener letras mayúsculas
                  </li>
                ) : (
                  <li style={{ color: "red" }}>Debe tener letras mayúsculas</li>
                )}
                {caractersConsecutives ? (
                  <li style={{ color: "green" }}>
                    La password no debe contener dos caracteres de ningun tipo o
                    numeros iguales consecutivoss
                  </li>
                ) : (
                  <li style={{ color: "red" }}>
                    La password no debe contener dos caracteres de ningun tipo o
                    numeros iguales consecutivos
                  </li>
                )}
                {countNumers ? (
                  <li style={{ color: "green" }}>
                    La password debe contener al menos 4 numeros (!@#$%ˆ&*-_+=?)
                  </li>
                ) : (
                  <li style={{ color: "red" }}>
                    La password debe contener al menos 4 numeros (!@#$%ˆ&*-_+=?)
                  </li>
                )}
                {specialCharacters ? (
                  <li style={{ color: "green" }}>
                    La password debe contener al menos 2 caracteres especiales
                    (!@#$%ˆ&*-_+=?)
                  </li>
                ) : (
                  <li style={{ color: "red" }}>
                    La password debe contener al menos 2 caracteres especiales
                    (!@#$%ˆ&*-_+=?)
                  </li>
                )}
                {number0 ? (
                  <li style={{ color: "green" }}>
                    La password no debe contener el número 0
                  </li>
                ) : (
                  <li style={{ color: "red" }}>
                    La password no debe contener el número 0
                  </li>
                )}
                {spaces ? (
                  <li style={{ color: "green" }}>
                    La password no debe contener espacios
                  </li>
                ) : (
                  <li style={{ color: "red" }}>
                    La password no debe contener espacios
                  </li>
                )}
              </>
            )}
            <br />
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
