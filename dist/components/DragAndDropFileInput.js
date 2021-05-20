"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button"));

var _DragAndDropFileInputModule = _interopRequireDefault(require("./DragAndDropFileInput.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DragAndDropFileInput = /*#__PURE__*/function (_React$Component) {
  _inherits(DragAndDropFileInput, _React$Component);

  var _super = _createSuper(DragAndDropFileInput);

  function DragAndDropFileInput(props) {
    var _this;

    _classCallCheck(this, DragAndDropFileInput);

    _this = _super.call(this, props);
    _this.state = {
      highlight: false
    };
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    _this.setFileInputElementRef = _this.setFileInputElementRef.bind(_assertThisInitialized(_this));
    _this.highlight = _this.highlight.bind(_assertThisInitialized(_this));
    _this.unhighlight = _this.unhighlight.bind(_assertThisInitialized(_this));
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DragAndDropFileInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var containerElement = this.containerElement;

      if (containerElement) {
        // Prevent defaults
        containerElement.addEventListener('dragenter', this.preventDefaults, false);
        containerElement.addEventListener('dragover', this.preventDefaults, false);
        containerElement.addEventListener('dragleave', this.preventDefaults, false);
        containerElement.addEventListener('drop', this.preventDefaults, false); // Highlight

        containerElement.addEventListener('dragenter', this.highlight, false);
        containerElement.addEventListener('dragover', this.highlight, false); // Unhighlight

        containerElement.addEventListener('dragleave', this.unhighlight, false);
        containerElement.addEventListener('drop', this.unhighlight, false); // Hande drop

        containerElement.addEventListener('drop', this.handleDrop, false);
      }
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.containerElement = node;
    }
  }, {
    key: "setFileInputElementRef",
    value: function setFileInputElementRef(node) {
      this.fileInputElement = node;
    }
  }, {
    key: "preventDefaults",
    value: function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: "highlight",
    value: function highlight(e) {
      this.setState({
        highlight: true
      });
    }
  }, {
    key: "unhighlight",
    value: function unhighlight(e) {
      this.setState({
        highlight: false
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e) {
      var files = e.dataTransfer.files;
      this.handleFiles(files);
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      this.props.onDragAndDropChange(files);
    }
  }, {
    key: "renderValueAsText",
    value: function renderValueAsText(value, defaultContent) {
      return value ? value : defaultContent;
    }
  }, {
    key: "handleAddButtonOnClick",
    value: function handleAddButtonOnClick() {
      this.fileInputElement.click();
    }
  }, {
    key: "handeFileInputElementOnChange",
    value: function handeFileInputElementOnChange(files) {
      this.props.onSelectChange(files);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: _DragAndDropFileInputModule.default.dragAndDropFileInput
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: this.props.id
      }, this.props.label, !this.props.contentOnly ? /*#__PURE__*/_react.default.createElement("div", {
        ref: this.setWrapperRef,
        className: "".concat(_DragAndDropFileInputModule.default.dragAndDropContainer, " ").concat(this.state.highlight ? _DragAndDropFileInputModule.default.highlighted : '')
      }, this.props.selectedFileName ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "Valgt fil:"), " ", this.props.selectedFileName)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "Slipp fil her"), /*#__PURE__*/_react.default.createElement("input", {
        ref: this.setFileInputElementRef,
        type: "file",
        onChange: this.props.onSelectChange
      }), this.props.buttonContent ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "eller klikk p\xE5 knappen for \xE5 velge fil"), /*#__PURE__*/_react.default.createElement(_Button.default, {
        size: "small",
        color: this.props.buttonColor,
        onClick: function onClick() {
          return _this2.handleAddButtonOnClick();
        },
        content: this.props.buttonContent
      })) : '')) : ''), this.props.contentOnly ? /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.selectedFileName, this.props.defaultContent)) : '', /*#__PURE__*/_react.default.createElement("span", {
        className: _DragAndDropFileInputModule.default.errorMessage
      }, this.props.errorMessage ? this.props.errorMessage : ''));
    }
  }]);

  return DragAndDropFileInput;
}(_react.default.Component);

DragAndDropFileInput.propTypes = {
  /** Text content inside list item */
  id: _propTypes.default.string.isRequired,
  onSelectChange: _propTypes.default.func.isRequired,
  onDragAndDropChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  contentOnly: _propTypes.default.bool,
  buttonColor: _propTypes.default.string,
  buttonContent: _propTypes.default.string,
  selectedFileName: _propTypes.default.string,
  defaultContent: _propTypes.default.string,
  hasErrors: _propTypes.default.bool,
  errorMessage: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]))]),
  mandatory: _propTypes.default.bool
};
DragAndDropFileInput.defaultProps = {
  label: '',
  contentOnly: false,
  buttonColor: 'default',
  defaultContent: '',
  hasErrors: false,
  errorMessage: '',
  mandatory: false
};
var _default = DragAndDropFileInput;
exports.default = _default;