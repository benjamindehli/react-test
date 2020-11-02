import React from 'react'
import PropTypes from 'prop-types'
import style from './NavigationBar.module.scss'

class PrimaryListItem extends React.Component {
  render () {
    if (typeof (this.props.listItem) === 'string') {
      return (
        <li><span>{ this.props.listItem }</span></li>
      )
    } else if (typeof (this.props.listItem) === 'object') {
      return (
        <li><a href={this.props.listItem.href}>{ this.props.listItem.name }</a></li>
      )
    } else {
      return null
    }
  }
}

class NavigationBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }
  handleClickOutside () {
    this.setState({
      active: false
    })
  }
  toggleList () {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }
  renderPrimaryList (items = this.props.primaryListItems, iteration = 0) {
    let listItems = items.map((listItem, i) => {
      let key = iteration + '-' + i
      if (listItem.listItems !== undefined) {
        return (
          <li key={key}><span>{ listItem.name }</span>{ this.renderPrimaryList(listItem.listItems, iteration + 1) }</li>
        )
      } else {
        return <PrimaryListItem listItem={listItem} key={key} />
      }
    })
    return <ul className={style.primaryList}>{listItems}</ul>
  }
  renderSecondaryList () {
    let listItems = this.props.secondaryListItems.map(function (listItem, i) {
      return <PrimaryListItem listItem={listItem} key={i} />
    })
    return <ul className={style.secondaryList}>{listItems}</ul>
  }
  renderLogo(logoLink){
    const logoElement = <img alt='DIBK logo' src={require('../images/dibk-logo-mobile.svg').default} />;
    return logoLink && logoLink.length
      ? (<a href={logoLink}>{logoElement}</a>)
      : logoElement
  }
  render () {
    return (
      <header>
        <div className={style.isPresent}>
          <div className={style.navigationBar}>
            <div className={style.logoContainer}>
              {this.renderLogo(this.props.logoLink)}
            </div>
            {
              this.props.children
                ? <div className={style.childElements}>{this.props.children}</div>
                : ''
            }
            {
              (this.props.primaryListItems && this.props.primaryListItems.length) || (this.props.secondaryListItems && this.props.secondaryListItems.length)
                ? <button className={`${style.menuToggle} ${this.state.active ? style.active : ''}`} onClick={() => this.toggleList()} />
                : ''
            }
          </div>
          <div className={`${style.dropdownContainer} ${this.state.active ? style.active : ''}`}>
            <div className={style.dropdown}>{this.renderPrimaryList()}{this.renderSecondaryList()}{this.props.children}</div>
          </div>
          <div className={`${style.dropdownOverlay} ${this.state.active ? style.active : ''}`} />
        </div>
      </header>
    )
  }
}

NavigationBar.propTypes = {
  /** Main links in navigation bar */
  primaryListItems: PropTypes.array,
  /** Secondary links in navigation bar */
  secondaryListItems: PropTypes.array,
  /** Link for logo */
  logoLink: PropTypes.string
}

NavigationBar.defaultProps = {
  primaryListItems: [],
  secondaryListItems: [],
  logoLink: null
}

export default NavigationBar
