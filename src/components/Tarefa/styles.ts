import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  background-color: #e1a32a;
  border-radius: 8px;
  margin-right: 8px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Courier New', Courier, monospace;
  display: block;
  width: 100%;
  margin: 16px auto;
  resize: none;
  border-top: none;
  border-right: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  padding: 8px 12px;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
