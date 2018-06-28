import React from 'react';
import Card from '../card/Card.jsx'
import EmptyCard from '../emptyCard/EmptyCard.jsx';
import {Tab, Tabs}  from 'material-ui';

const style = {
    fontFamily: 'consolas',
    backgroundColor: '#4f5357'
};

module.exports = React.createClass({

    render() {
        const {
            developer,
            release,
            activeTab,

            fetchApps,
            deleteApp,
            changeTab,
            clickEmptyCard
        } = this.props;

        return (
            <div>
                <Tabs
                    value={activeTab}
                    onChange={changeTab}>

                    <Tab
                        style={style}
                        label="Release"
                        value="release">
                        <div>
                            <EmptyCard
                                onAddClick={clickEmptyCard}/>

                            {release.map(code => {
                                return (
                                    <Card
                                        fetchApps={fetchApps}
                                        deleteApp={deleteApp}
                                        key={code._id}
                                        code={code} />
                                );
                            })}
                        </div>
                    </Tab>

                    <Tab
                        style={style}
                        label="Developer"
                        value="developer">
                        <div>
                            <EmptyCard
                                onAddClick={clickEmptyCard}/>

                            {developer.map(code => {
                                return (
                                    <Card
                                        fetchApps={fetchApps}
                                        deleteApp={deleteApp}
                                        key={code._id}
                                        code={code} />
                                );
                            })}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
});