import { type StyleFunctionProps } from '@chakra-ui/theme-tools';
declare const _default: {
    parts: string[];
    baseStyle: {
        field: {
            width: string;
            display: string;
            alignItems: string;
            justifyContent: string;
            transition: string;
        };
        option: {
            display: string;
            alignItems: string;
            cursor: string;
            _disabled: {
                opacity: number;
                cursor: string;
            };
        };
        menu: {
            minW: string;
        };
    };
    variants: {
        outline: (props: StyleFunctionProps) => {
            menu: {
                bg: string;
                boxShadow: string;
                color: string;
                minW: string;
                py: string;
                borderRadius: string;
                borderWidth: string;
            };
            option: {
                _selected: {
                    bg: string;
                };
            };
            field: {
                borderWidth: string;
                bg: string;
                _hover: {
                    borderColor: string;
                };
                _disabled: {
                    opacity: number;
                    cursor: string;
                    borderColor: string;
                };
                _readOnly: {
                    boxShadow: string;
                    userSelect: string;
                };
                _invalid: {
                    borderColor: any;
                    boxShadow: string;
                };
                _focus: {
                    borderColor: string;
                    boxShadow: string;
                };
                _expanded: {
                    borderColor: string;
                    boxShadow: string;
                };
            };
        };
    };
    sizes: {
        sm: {
            field: {
                px: number;
                h: number;
                fontSize: string;
                borderRadius: string;
            };
            menu: {
                fontSize: string;
                borderRadius: string;
            };
            option: {
                px: number;
                h: number;
                fontSize: string;
            };
        };
        md: {
            field: {
                px: number;
                h: number;
                fontSize: string;
                borderRadius: string;
            };
            menu: {
                fontSize: string;
                borderRadius: string;
            };
            option: {
                px: number;
                h: number;
                fontSize: string;
            };
        };
        lg: {
            field: {
                px: number;
                h: number;
                fontSize: string;
                borderRadius: string;
            };
            menu: {
                fontSize: string;
                borderRadius: string;
            };
            option: {
                px: number;
                h: number;
                fontSize: string;
            };
        };
    };
    defaultProps: {
        size: string;
        variant: string;
        colorScheme: string;
    };
};
export default _default;
