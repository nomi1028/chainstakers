import React, { useState, useCallback } from "react";
import { Input } from "reactstrap";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Index = ({
  label = "label",
  required,
  inline = false,
  showField = false,
  incIcons = false,
  onInc = () => {},
  onDec = () => {},
  errorMsg = "Field is Required",
  ...rest
}) => {
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleBlur = useCallback(
    (e) => {
      if (!required) return setError(false);
      if (e.target.value) setError(false);
      else setError(true);
    },
    [required]
  );
  const handleChange = useCallback(
    (e) => {
      if (rest?.onChange) rest?.onChange(e);
      if (required) {
        if (e.target.value) setError(false);
        else setError(true);
      }
    },
    [rest.onChange]
  );
  const getType = useCallback(() => {
    if (!showField) return rest?.type || "text";
    if (showField && visible) return "text";
    if (showField && !visible) return "password";
  });
  const renderVisiblityIcon = () =>
    showField &&
    (!visible ? (
      <VisibilityIcon
        onClick={() => setVisible(true)}
        className="password-visiblity-icon"
      />
    ) : (
      <VisibilityOffIcon
        onClick={() => setVisible(false)}
        className="password-visiblity-icon"
      />
    ));

  return (
    <div className={inline ? "custom-input" : ""}>
      <label className="input-label text-capitalize">
        {label}{" "}
        {required && (
          <span className="text-danger" style={{ position: "absolute" }}>
            *
          </span>
        )}
      </label>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: incIcons ? "flex" : "",
        }}
      >
        <Input
          {...rest}
          type={getType()}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {renderVisiblityIcon()}
        {incIcons && (
          <div className="icons-container">
            <KeyboardArrowUpIcon className="icon-s" onClick={onInc} />
            <KeyboardArrowDownIcon className="icon-s" onClick={onDec} />
          </div>
        )}
        {error && (
          <span
            className="text-danger"
            style={{
              position: "absolute",
              fontSize: "12px",
              fontFamily: "Poppins",
            }}
          >
            {errorMsg}
          </span>
        )}
      </div>
      <style jsx>{`
        .custom-input {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          gap: 0px;
        }
        .input-label {
          font-size: 12px;
          color: #000000;
          font-weight: 600;
          font-family: "Poppins";
        }
        .icons-container {
          width: 15px !important;
          height: 45px !important;
          margin-left: -28px !important;
          color: white !important;
          margin-top: 5px !important;
        }
        .icon-s {
          background-color: #0054ad !important;
          margin: bottom 0px !important;
          color: white !important;
          width: 22px !important;
          height: 17px !important;
          border-radius: 3px !important;
        }
        .password-visiblity-icon {
          position: absolute;
          right: 15px;
          top: 15px;
          color: #505d69;
          cursor: pointer;
        }
        @media (min-width: 769px) {
          .custom-input {
            flex-direction: row;
            align-items: center;
            gap: 20px;
          }
          .custom-input label {
            margin-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(Index);