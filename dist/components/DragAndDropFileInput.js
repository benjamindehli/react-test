"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button"));

var _DragAndDropFileInputModule = _interopRequireDefault(require("./DragAndDropFileInput.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DragAndDropFileInput extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setFileInputElementRef = this.setFileInputElementRef.bind(this);
    this.highlight = this.highlight.bind(this);
    this.unhighlight = this.unhighlight.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
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

  setWrapperRef(node) {
    this.containerElement = node;
  }

  setFileInputElementRef(node) {
    this.fileInputElement = node;
  }

  preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  highlight(e) {
    this.setState({
      highlight: true
    });
  }

  unhighlight(e) {
    this.setState({
      highlight: false
    });
  }

  handleDrop(e) {
    var files = e.dataTransfer.files;
    this.handleFiles(files);
  }

  handleFiles(files) {
    this.props.onDragAndDropChange(files);
  }

  renderValueAsText(value, defaultContent) {
    return value ? value : defaultContent;
  }

  handleAddButtonOnClick() {
    this.fileInputElement.click();
  }

  handeFileInputElementOnChange(files) {
    this.props.onSelectChange(files);
  }

  render() {
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
      onClick: () => this.handleAddButtonOnClick(),
      content: this.props.buttonContent
    })) : '')) : ''), this.props.contentOnly ? /*#__PURE__*/_react.default.createElement("span", null, this.renderValueAsText(this.props.selectedFileName, this.props.defaultContent)) : '', /*#__PURE__*/_react.default.createElement("span", {
      className: _DragAndDropFileInputModule.default.errorMessage
    }, this.props.errorMessage ? this.props.errorMessage : ''));
  }

}

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