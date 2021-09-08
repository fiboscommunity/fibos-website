import Footer from './footer'
import Header from './header'
import Share from '../share/index'

class Temp extends React.Component {
  render () {
    const { language, pageName, isShareHidden } = this.props
    return (
      <div className={`${pageName}_body`}>
        <div className={`${pageName}_header`}>
          <Header language={language} />
        </div>
        {this.props.children}
        <Footer language={language} />
        <div className={isShareHidden}>
          <Share />
        </div>
      </div>
    )
  }
}

export default Temp