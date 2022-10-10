import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList, isMatched: true}

  onDelete = id => {
    const {historyList} = this.state
    const filteredUserList = historyList.filter(eachUser => eachUser.id !== id)
    this.setState({historyList: filteredUserList})
  }

  onChangeInput = (event, title) => {
    this.setState({searchInput: event.target.value})
    if (event.target.value !== title) {
      this.setState({isMatched: false})
    }
  }

  renderBrowserHistory = () => {
    const {searchInput, historyList} = this.state
    const searchUserList = historyList.filter(eachUser =>
      eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="search-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search History"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="list-container">
          <ul className="list-bg-container">
            {searchUserList.map(eachApp => (
              <li key={eachApp.id} className="list-item-container">
                <p>{eachApp.timeAccessed}</p>
                <img
                  src={eachApp.logoUrl}
                  alt="domain logo"
                  className="logo-icon"
                />
                <p>{eachApp.title}</p>
                <p>{eachApp.domainUrl}</p>
                <button
                  type="button"
                  className="delete-button"
                  onClick={this.onDelete}
                  testId="delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                    className="delete-icon"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderEmptyHistory = () => {
    const {searchInput} = this.state
    return (
      <div>
        <div className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="search-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="list-container">
          <p>There is no history to show</p>
        </div>
      </div>
    )
  }

  render() {
    const {isMatched} = this.state
    return (
      <div>
        {isMatched ? this.renderBrowserHistory() : this.renderEmptyHistory()}
      </div>
    )
  }
}

export default App
