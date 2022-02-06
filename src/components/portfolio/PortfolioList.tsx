import { FC } from 'react'
import styled from '@emotion/styled'

import PortfolioItem from './PortfolioItem'

const Wrapper = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export interface ProtfolioType {
	node: {
		id: string
		frontmatter: {
			title: string
			summary: string
			date: string
			categories: string[]
			thumbnail: {
				publicURL: string
			}
		}
	}
}

interface Props {
	portfolios: ProtfolioType[]
}

const PortfolioList: FC<Props> = ({ portfolios }) => {
	return (
		<Wrapper>
			{portfolios.map(({ node: { id, frontmatter } }) => (
				<PortfolioItem key={id} {...frontmatter} />
			))}
		</Wrapper>
	)
}

export default PortfolioList