import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  render(){
    const { dispatch, count} = this.props;
    return(
      <div className={styles.normal}>
        <div className={styles.record}>Highest Record: {count.record}</div>
        <div className={styles.current}>{count.current}</div>
        <div className={styles.button}>
          <button onClick={()=>{
            dispatch({
              type:'count/add'
            })
          }}>+</button>
          <button onClick={()=>{
            dispatch({
              type:'count/minus'
            })
          }}>-</button>
          <button onClick={()=>{
            dispatch({
              type:'count/delay'
            })
          }}>
            过2秒+1
          </button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
    return {
      count:state.count
    }
}
IndexPage.propTypes = {
};

export default connect(mapStateToProps)(IndexPage);
