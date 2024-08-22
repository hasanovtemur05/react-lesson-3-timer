import  { Component } from 'react'

export default class Timer extends Component {
    state = {
        hours:0,
        minutes:0,
        secound:0,
        disabled: false,
        interval: ""
    }
    startInterval=()=>{
        let a = setInterval(() => {
            const { secound, minutes, hours} = this.state;
            if (secound > 0) {
                this.setState({ secound: secound - 1 });
            } else if (minutes > 0) {
                this.setState({
                    minutes: minutes - 1,
                    secound: 59,
                });
            } else if (hours > 0) {
                this.setState({
                    hours: hours - 1,
                    minutes: 59,
                    secound: 59,
                });
            } else {
                clearInterval(this.state.interval);
                this.setState({ disabled: false });
            }
        }, 1000);
        this.setState({
            disabled: true,
            interval: a
        })
    }
    
    stopInterval=()=>{
        clearInterval(this.state.interval)
        this.setState({
            disabled:false,  
        })
    }

    clearIntervals=()=>{
        const {hours, minutes, secound, disabled} = this.state
        clearInterval(this.state.interval)
        this.setState({
            disabled:false,  
            hours:0,
            minutes:0,
            secound:0
        })
    }

  render() {
    const {hours, minutes, secound, disabled} = this.state
    
    return (
        
      <div className="container">
        <div className="row mt-5">
            <div className="card col-md-6 offset-3">
                <div className="card-header">
                    <h1 className='text-center'>Timer</h1>
                </div>


                <div className="card-body gap-5">
                    <div className='d-flex gap-4 justify-content-center mb-4'>
                        <h3>hour</h3>
                        <h3>minutes</h3>
                        <h3>secound</h3>
                    </div>
                    <div className='d-flex justify-content-center gap-5'>
                    <div className="div">
                        <button className='btn btn-success' onClick={()=>{
                            this.setState({
                                hours: hours + 1
                            })

                        }}>+</button>
                        <h2 className='px-2'>{hours}</h2>
                        <button className='btn btn-danger' onClick={()=>{
                            this.setState({
                                hours: hours - 1
                            })
                        }}>-</button>
                    </div>
                    <div className="div">
                        <button className='btn btn-success' onClick={()=>{
                            this.setState({
                                minutes: minutes + 1
                            })
                        }}>+</button>
                        <h2 className='px-2'>{minutes}</h2>
                        <button className='btn btn-danger' onClick={()=>{
                            this.setState({
                                minutes: minutes - 1
                            })
                        }}>-</button>
                    </div>
                    <div className="div">
                        <button className='btn btn-success' onClick={()=>{
                            this.setState({
                                secound: secound + 1
                            })
                        }}>+</button>
                        <h2 className='px-2'>{secound}</h2>
                        <button className='btn btn-danger' onClick={()=>{
                            this.setState({
                                secound: secound - 1
                            })
                        }}>-</button>
                    </div>
                    </div>
                    
                </div>

  



                <div className="card-footer d-flex justify-content-center">
                    <div>
                    <button className='btn btn-success mx-2' onClick={this.startInterval} disabled={disabled} >Start</button>
                    <button className='btn btn-danger mx-2' onClick={this.stopInterval}>stop</button>
                    <button className='btn btn-warning mx-2' onClick={this.clearIntervals}>clear</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
