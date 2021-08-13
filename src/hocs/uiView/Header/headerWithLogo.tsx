import React from 'react';

//components
import Logo from '../../../components/Logo/Logo';

export const headerWithLogo = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) =>
    class HeaderWithLogo extends React.Component {
        render() {
            const { ...props } = this.props;

            return <WrappedComponent {...(props as P)} left={<Logo />} />;
        }
    };
