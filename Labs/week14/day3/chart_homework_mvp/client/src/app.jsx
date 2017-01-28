import React from'react'
import ReactDOM from'react-dom'
import ChartContainer from'./containers/ChartContainer.jsx'

window.onload = function () {
  ReactDOM.render(
    <ChartContainer url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json' />,
    document.getElementById('app')
  );
}
