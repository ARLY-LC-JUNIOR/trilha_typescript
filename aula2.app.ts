interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pesssoa: Pessoa = {
    nome: 'Arly',
    idade: '45'
}

const outraPessoa: Pessoa = {
    nome: 'junior',
    idade:'45'
    profissao: 'desenvolvedor'
}

const arrayPessoa: Array<Pessoa> = [
    pesssoa,
    outraPessoa,
]
const arrayNum: number[] = [
    1, 2, 3
]
   
const arrayString: Array<String> = [
    '1', '2', '3'
]
    