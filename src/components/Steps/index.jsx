import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

type Props = {
    steps: Step[],
};

type Step = {
    title: string,
    subtitle: ?string,
};

class Index extends Component {
    static propTypes = {
        steps: PropTypes.array.isRequired
    };

    renderStep({ title, subtitle }, index) {
        return <div className={`step step-${ index + 1 }`}>
            <h1>{ title }</h1>
            <h3>{ subtitle }</h3>
        </div>;
    }

    render() {
        const { steps } = this.props;

        if (!steps || !(steps instanceof Array) || steps.length === 0) {
            return null;
        }

        return <div className={'steps'}>
            { steps.map(this.renderStep) }
        </div>;
    }
}

export default Index;