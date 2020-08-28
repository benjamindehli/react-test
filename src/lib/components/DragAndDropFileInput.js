import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import style from './DragAndDropFileInput.module.scss';


class DragAndDropFileInput extends React.Component {

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
    const containerElement = this.containerElement;

    if (containerElement) {
      // Prevent defaults
      containerElement.addEventListener('dragenter', this.preventDefaults, false)
      containerElement.addEventListener('dragover', this.preventDefaults, false)
      containerElement.addEventListener('dragleave', this.preventDefaults, false)
      containerElement.addEventListener('drop', this.preventDefaults, false)

      // Highlight
      containerElement.addEventListener('dragenter', this.highlight, false)
      containerElement.addEventListener('dragover', this.highlight, false)

      // Unhighlight
      containerElement.addEventListener('dragleave', this.unhighlight, false)
      containerElement.addEventListener('drop', this.unhighlight, false)

      // Hande drop
      containerElement.addEventListener('drop', this.handleDrop, false)
    }

  }

  setWrapperRef(node) {
    this.containerElement = node;
  }

  setFileInputElementRef(node) {
    this.fileInputElement = node;
  }

  preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  highlight(e) {
    this.setState({highlight: true});
  }

  unhighlight(e) {
    this.setState({highlight: false});
  }

  handleDrop(e) {
    const files = e.dataTransfer.files
    this.handleFiles(files)
  }

  handleFiles(files) {
   this.props.onDragAndDropChange(files);
  }

  renderValueAsText(value, defaultContent) {
    return value
        ? value
        : defaultContent;
  }

  handleAddButtonOnClick(){
    this.fileInputElement.click();
  }

  handeFileInputElementOnChange(files) {
    this.props.onSelectChange(files);
  }

  render() {
    return (<div className={style.dragAndDropFileInput}>
      <label htmlFor={this.props.id}>
        {this.props.label}
        { !this.props.contentOnly
          ? (
            <div ref={this.setWrapperRef} className={`${style.dragAndDropContainer} ${this.state.highlight ? style.highlighted : ''}`}>
                  {this.props.selectedFileName
                    ? (<div>
                      <span><b>Valgt fil:</b> {this.props.selectedFileName}</span>
                    </div>)
                    : (
                    <React.Fragment>
                      <div>Slipp fil her</div>
                      <input ref={this.setFileInputElementRef} type="file" onChange={this.props.onSelectChange}/>
                        {
                          this.props.buttonContent
                            ? (
                              <React.Fragment>
                                <div>eller klikk på knappen for å velge fil</div>
                                <Button size='small' color={this.props.buttonColor} onClick={() => this.handleAddButtonOnClick()} content={this.props.buttonContent}/>
                              </React.Fragment>
                            )
                            : ''
                        }
                    </React.Fragment>)
                  }

            </div>
          ) : ''
        }
      </label>
      {
        this.props.contentOnly
          ? <span>{this.renderValueAsText(this.props.selectedFileName, this.props.defaultContent)}</span>
          : ''
      }
      <span className={style.errorMessage}>{this.props.errorMessage ? this.props.errorMessage : ''}</span>
    </div>)
  }
}

DragAndDropFileInput.propTypes = {
  /** Text content inside list item */
  id: PropTypes.string.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  onDragAndDropChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]))
  ]),
  contentOnly: PropTypes.bool,
  buttonColor: PropTypes.string,
  buttonContent: PropTypes.string,
  selectedFileName: PropTypes.string,
  defaultContent: PropTypes.string,
  hasErrors: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]))
  ]),
  mandatory: PropTypes.bool
};

DragAndDropFileInput.defaultProps = {
  label: '',
  contentOnly: false,
  buttonColor: 'default',
  defaultContent: '',
  hasErrors: false,
  errorMessage : '',
  mandatory: false
};

export default DragAndDropFileInput;
