'use strict'

import React from 'react';
import ArticleContent from './ArticleContent';

export default class SayHello extends React.Component {
    render() {
        return (
            <div className="content">
                <h1>hello, React!!</h1>
                <ArticleContent />
            </div>
        );
    }
}
