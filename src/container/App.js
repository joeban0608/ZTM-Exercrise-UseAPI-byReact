import React, { Component } from 'react';
import SelectBox,{SelectBoxForLoading} from '../component/SelectBox'
import SentenceBox from '../component/SentenceBox'
import Scroll from '../component/Scroll'
import ErrorBoundary from '../component/ErrorBoundary';
import './App.css';
import 'tachyons';

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            randomNumType: '',
        }
    }
    
    //設定請求api，這邊不用componentDidMount()，而是自己做一個function，在onSelectChange時，再callback請求
    //因為我每次改變selcet就需要請求一次，但如果是用componentDidMount()進入lifecycle Hooks循環會有限制。
    randomFetch = () => {
        fetch(`http://numbersapi.com/random/${this.state.value}`)
        .then(response => response.text())
        .then(sentence => this.setState({randomNumType:sentence}))
    }
    // 設定監聽onSelectChange
    // 如果不寫  this.handleChange = this.handleChange.bind(this);　要用arrowfunction才可以執行：
    onSelectChange = (event) => {
        this.setState({value: event.target.value})
        // this.randomFetch()　改變select之後，reset randomFetch的請求
        this.randomFetch()
    }
    
    render() {
        const {value, randomNumType} = this.state;

        // function to set <SentenceBox numSentence={}>
        const checkNumSentence = () => {
            return ((value && randomNumType)? randomNumType : undefined)
        }
        // function to set <SentenceBox num={}>
        const checkNum = () => {
            return ((value && randomNumType)? randomNumType.split(' ')[0] : '')
        }

        if (!randomNumType.length) {
            return (
                <div className="tc">
                    <SelectBoxForLoading valueReset={value} selectChange={this.onSelectChange}/>
                    <h1 className="f-headline"><span>Loading...</span></h1>
                </div>
                )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1 lh-title"><span>The Secret of Number: </span></h1>
                    <SelectBox valueReset={value} selectChange={this.onSelectChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <SentenceBox numSentence={ checkNumSentence() } num={ checkNum() } />
                        </ErrorBoundary>
                    </Scroll>
                    <footer>
                        <div>
                            <p className="f4 lh-title">Reference API: <a target="_blank" href="http://numbersapi.com/#random/math" rel="noreferrer">NumberAPI</a></p>
                            <p className="f4 lh-title"><span>Copyright © 2021 <a target="_blank" href="https://github.com/joeban0608/ZTM-Exercrise-UseAPI" rel="noreferrer">Joeban0608</a></span></p>
                        </div>
                    </footer>
                </div>
            );
        }
    }
}

export default App;