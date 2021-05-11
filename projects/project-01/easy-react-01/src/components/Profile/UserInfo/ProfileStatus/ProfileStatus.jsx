import  React  from 'react';
import s from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {

    state = {
        editMode:true
    }

    editModeToggle(){
    
        this.state.editMode
        ? this.setState({editMode:false})
        : this.setState({editMode:true})

    }

    handleFocus(event){
        event.target.select()
    }

    render (){
        return (
            <section>

                {!this.state.editMode && 
                    <div 
                        onClick = { this.editModeToggle.bind(this) } 
                        className={s.status}>{this.props.status}
                    </div> 
                }
                
                {this.state.editMode && 
                    <section>
                        <div>.</div>
                        <div className={s.input_status_wrapper}>
                            <input 
                                className={s.inputStatus}
                                autoFocus={true} 
                                onFocus={this.handleFocus} 
                                onBlur = { this.editModeToggle.bind(this) } 
                                type="text" 
                                value={this.props.status}>
                            </input>
                        </div>
                    </section>
                }

            </section>
        )
    }


}

export default ProfileStatus