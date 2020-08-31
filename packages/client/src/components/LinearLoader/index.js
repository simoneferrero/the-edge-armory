import styled, { css } from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress'

import { lighten } from '../../helpers/color'

const LinearLoader = styled(LinearProgress)`
  ${({ theme }) => css`
    background-color: ${lighten(theme.colors.primary, 1.5)} !important;

    .MuiLinearProgress-bar {
      background-color: ${theme.colors.primary};
    }
  `}
`

export default LinearLoader
