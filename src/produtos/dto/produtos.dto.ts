export class ProdutoDto{
    id: string
    nome: string
    destinacao: string
    taxaRentabilidade: string
    taxaAdministracao: string
    vencimento: Date
    status: ProdutoStatus
}

export enum ProdutoStatus {
    DISPONIVEL = 'Disponivel',
    INDISPONIVEL = 'Indisponivel'
}