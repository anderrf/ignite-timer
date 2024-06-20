import 'styled-components'
import {defaultTheme} from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styles-components'{
    export interface DefaultTheme extends ThemeType{}
}