import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import FirstBlock from "../pages/Equipment/Content/FirstBlock";
import FirstPic from '../img/IMG-FirstTel.png'


const styles = {
    border: '2px solid #902d50',
    borderRadius: '10px',
    width: '300px',
    height: '90px',
    marginTop: '20px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontFamily: "Open Sans",
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '25px',
}

class TabMenu extends React.PureComponent {
    state = { activeIndex: 0 }

    handleChange = (_, activeIndex) => this.setState({ activeIndex })
    render() {
        const { activeIndex } = this.state;
        return (
            <div
            >
                <VerticalTabs
                    style={{ margin: '200px 0 0 0', position: 'fixed'}}
                    value={activeIndex}
                    onChange={this.handleChange}
                >
                    <MyTab style={styles} label='МОДУЛЬНО ОПТИКО-ЭЛЕКТРОННЫЕ СРЕДСТВА' />
                    <MyTab style={styles} label='ФОТОПРИЕМНЫЕ УСТРОЙСТВА' />
                    <MyTab style={styles} label='ОПОРНО-ПОВОРОТНЫЕ УСТРЙОСТВА' />
                    <MyTab style={styles} label='ПАВИЛЬОНЫ УКРЫТИЯ' />
                </VerticalTabs>

                { activeIndex === 0 && <TabContainer>
                    <FirstBlock src={FirstPic} obj={1}/>
                    <FirstBlock src={FirstPic} obj={2}/>
                    <FirstBlock src={FirstPic} obj={3}/>
                    <FirstBlock src={FirstPic} obj={4}/>
                    <FirstBlock src={FirstPic} obj={5}/>
                    <FirstBlock src={FirstPic} obj={6}/>
                </TabContainer> }
                { activeIndex === 1 && <TabContainer>Item Two</TabContainer> }
                { activeIndex === 2 && <TabContainer>Item Three</TabContainer> }
                { activeIndex === 3 && <TabContainer>Item Three</TabContainer> }
            </div>
        )
    }
}

const VerticalTabs = withStyles(theme => ({
    flexContainer: {
        flexDirection: 'column',
    },
    textColor: {
        color: '#fff'
    },
    indicator: {
        display: 'none',
    }
}))(Tabs)

const MyTab = withStyles(theme => ({
    selected: {
        border: '3px solid #b73966 !important',
        borderRadius: '10px',
        width: '300px',
        height: '90px',
        marginTop: '20px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        fontFamily: "Open Sans",
        fontSize: '16px',
        fontWeight: '300',
        lineHeight: '25px',
    }
}))(Tab);

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>
    );
}

export default TabMenu