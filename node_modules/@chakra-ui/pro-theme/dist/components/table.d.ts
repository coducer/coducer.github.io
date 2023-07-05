import { type StyleFunctionProps } from '@chakra-ui/theme-tools';
declare const _default: {
    sizes: {
        md: {
            th: {
                lineHeight: string;
            };
            td: {
                fontSize: string;
            };
        };
    };
    baseStyle: {
        table: {
            bg: string;
            whiteSpace: string;
        };
        th: {
            fontWeight: string;
            textTransform: string;
            letterSpacing: string;
            borderTopWidth: string;
            whiteSpace: string;
        };
    };
    variants: {
        simple: (props: StyleFunctionProps) => {
            th: {
                color: string;
                bg: string;
            };
        };
        striped: (props: StyleFunctionProps) => {
            th: {
                color: string;
                borderBottomWidth: string;
            };
            thead: {
                'th,td': {
                    borderWidth: string;
                };
            };
            tbody: {
                tr: {
                    'th,td': {
                        borderWidth: string;
                    };
                    '&:last-of-type': {
                        'th, td': {
                            borderBottomWidth: string;
                        };
                    };
                    '&:nth-of-type(odd)': {
                        'th, td': {
                            borderBottomWidth: string;
                        };
                        td: {
                            bg: string;
                        };
                    };
                };
            };
        };
    };
};
export default _default;
