import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import {AppContextConsumer} from '../context/AppContext'

import {Row, Col, Card, Typography, Icon} from 'antd'

import {App} from '../components/app'

import {themes} from '../themes.js'

const {Title} = Typography

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <App title={siteTitle} subtitle={`locked`} navigation={false}>
        <Helmet htmlAttributes={{lang: 'en'}} title={`${siteTitle}`} />
        <AppContextConsumer>
          {({color}) => {
            return (
              <Row>
                <Col
                  xs={{span: 20, offset: 2}}
                  sm={{span: 16, offset: 4}}
                  md={{span: 12, offset: 6}}
                  lg={{span: 8, offset: 8}}>
                  <Card
                    className={color in themes ? themes[color].style.card : null}
                    actions={[
                      <a href="https://rayriffy.com" key="button-close">
                        <Icon type="close-circle" />
                      </a>,
                      <a href="/listing" key="button-go">
                        <Icon type="check-circle" />
                      </a>,
                    ]}>
                    <Title level={2} className={color in themes ? themes[color].style.cardTitle : null}>
                      Are you legally classified as an adult?
                    </Title>
                    <p className={color in themes ? themes[color].style.cardContent : null}>
                      You must be classified as an adult and legally allowed to view the contents of this site in the country
                      you are currently located.
                    </p>
                  </Card>
                </Col>
              </Row>
            )
          }}
        </AppContextConsumer>
      </App>
    )
  }
}

export default IndexPage

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
}
