import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { readFile } from 'fs'

Enzyme.configure({ adapter: new Adapter() })

window.resizeTo = (w, h = 768) => {
  window.innerWidth = w
  window.innerHeight = h
  window.dispatchEvent(new Event('resize'))
}

const mockWindow = window

jest.mock('react-responsive', () => {
  const Component = require('react').Component
  const toQuery = require.requireActual('react-responsive').toQuery
  const matchMedia = require('matchmediaquery')
  return class MediaQueryMock extends Component {
    state = {
      values: {
        width: mockWindow.innerWidth,
        height: mockWindow.innerheight,
      },
    }
    componentDidMount() {
      mockWindow.addEventListener('resize', () => {
        this.setState({
          values: {
            width: mockWindow.innerWidth,
            height: mockWindow.innerheight,
          },
        })
      })
    }
    componentWillUnmount() { mockWindow.removeEventListener('resize') }
    render() {
      const query = toQuery(this.props)
      const mql = matchMedia(query, this.state.values)
      // eslint-disable-next-line react/prop-types
      return mql.matches && this.props.children
    }
  }
})

// Force tests to fail if required proptypes are not set
jest.spyOn(console, 'error').mockImplementation(message => {
  // eslint-disable-next-line no-console
  console.warn(message)
  throw new Error(message)
})

global.fetch = async url => ({
  json: () => new Promise((resolve, reject) => {
    readFile(`${__dirname}/../build/${url}`, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(JSON.parse(data))
    })
  }),
  ok: true,
})
