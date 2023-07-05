declare const _default: {
    baseStyle: {
        color: string;
        mb: string;
        fontSize: string;
    };
    sizes: {
        sm: {
            _peerPlaceholderShown: {
                fontSize: string;
                top: string;
                left: string;
            };
        };
        md: {
            _peerPlaceholderShown: {
                fontSize: string;
                top: string;
                left: string;
            };
        };
        lg: {
            _peerPlaceholderShown: {
                fontSize: string;
                top: string;
                left: string;
            };
        };
    };
    variants: {
        inline: () => {
            margin: number;
            minW: string;
        };
        floating: () => {
            position: string;
            transition: string;
            pointerEvents: string;
            top: string;
            left: string;
            _peerPlaceholderShown: {
                fontWeight: string;
                color: string;
            };
            _peerFocus: {
                fontSize: string;
                fontWeight: string;
                top: string;
                left: string;
                color: string;
            };
        };
    };
    defaultProps: {
        size: string;
    };
};
export default _default;
