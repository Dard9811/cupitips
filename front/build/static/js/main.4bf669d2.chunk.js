(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),o=n.n(s),c=n(1),l=n(2),i=n(4),u=n(3),m=n(5),h=(n(13),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={votes:0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onVote",value:function(){this.setState({votes:this.state.votes+1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"tweet"},this.props.tweet.text,r.a.createElement("label",{htmlFor:"btnVote"},r.a.createElement("button",{onClick:this.onVote.bind(this),id:"btnVote",className:"btn btn-primary"},"Vote "," ",r.a.createElement("span",{role:"img","araia-label":"thumbs up"},"\ud83d\udc4d")),r.a.createElement("span",null," Votes: ",r.a.createElement("span",{id:"spVoteValue"},this.state.votes))))}}]),t}(a.Component)),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={tweets:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/data").then((function(e){return e.json()})).then((function(t){return e.setState({tweets:t})}))}},{key:"renderTweets",value:function(){return this.state.tweets.map((function(e){return r.a.createElement(h,{tweet:e})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",null," Tweets "),this.renderTweets()),r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null," Controls ")))}}]),t}(r.a.Component);o.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4bf669d2.chunk.js.map