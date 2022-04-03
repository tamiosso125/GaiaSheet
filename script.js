const races = [
  {
    name: "alraunes",
    pv: 25,
    pe: 25,
    dicePV: "1d6",
    dicePE: "1d6",
    skills: `Sobrevivência, Carisma, Furtividade, Arcanismo
    ou Percepção.`,
    attributes: `Evasão, Concentração ou Espírito.`,
    raceSkills: [
      {
        name: `MINHAS RAÍZES`,
        type: `[A]`,
        params: `1 Alvo | 6 Metros`,
        description: `O Alraune força um alvo em alcance desta habilidade a
        um teste de Resistência Dif. 8; caso falhe, este alvo
        será envolvido por vinhas que irão aprisionar os seus
        pés, impedindo que este alvo realize Ações De
        Movimentação.
        Estas vinhas possuem 1d4 + (1d4 para cada Ponto de
        Aprendizado adquirido) Pontos de Vida.
        Qualquer ataque ou habilidade que cause dano,
        poderá remover os Pontos de Vida das vinhas
        automaticamente, sem testes de Precisão ou
        Concentração. Ao remover todos os Pontos de Vida
        das vinhas, o alvo preso será libertado e poderá utilizar
        novamente suas Ações de Movimentação.
        Esta habilidade não poderá ser realizada caso o alvo
        não esteja tocando o solo. A duração desta habilidade
        fora de combate é de 10 minutos. Esta habilidade não
        acumula o seu efeito sobre o mesmo alvo.
        Esta habilidade pode ser utilizada um número de vezes
        por dia igual a 1 + (1 para cada Ponto de Aprendizado
        adquirido).
        Com gestos rápidos e uma breve comunhão com o Primal, o
        Alraune recebe auxilio da essência da natureza.`,
      },
      {
        name: `BELEZA NATURAL`,
        type: `[P]`,
        description: `O Alraune pode realizar um segundo teste de Carisma
        caso tenha falhado no primeiro. Este efeito só pode
        ocorrer uma vez por turno.
        Alraunes carregam consigo uma essência exótica, que para
        muitos é esculpida em sua aparência única, ou no seu jeito de
        se expressar.`,
      },
      {
        name: `LIGAÇÃO COM A NATUREZA`,
        type: `[P]`,
        description: `Sua vida na natureza lhe garantiu diversos
        conhecimentos básicos de sobrevivência, como
        identificar se uma planta ou alimento é venenoso e
        uma pequena comunicação com animais dóceis que
        podem lhe auxiliar brevemente, sem teste algum.
        Assim, um Alraune não precisa se alimentar, mas, por
        conta disso, precisa do dobro de água e de sol
        diariamente para sobreviver. Ambientes desérticos ou
        sem luz solar onde não haja vegetação ou rios são os
        lugares que um Alraune nunca gostaria de ir.
        Como Guardião dos Antigos, o Alraune tem conexão direta
        com a natureza, sendo parte dela.`,
      },
    ],
  },
  {
    name: "anoes",
    pv: 30,
    pe: 20,
    dicePV: "1d6",
    dicePE: "1d6",
    skills: `Sobrevivência, Carisma, Furtividade, Arcanismo
    ou Percepção.`,
    attributes: `Evasão, Concentração ou Espírito.`,
    raceSkills: [
      {
        name: `MINHAS RAÍZES`,
        type: `[A]`,
        params: `1 Alvo | 6 Metros`,
        description: `O Alraune força um alvo em alcance desta habilidade a
        um teste de Resistência Dif. 8; caso falhe, este alvo
        será envolvido por vinhas que irão aprisionar os seus
        pés, impedindo que este alvo realize Ações De
        Movimentação.
        Estas vinhas possuem 1d4 + (1d4 para cada Ponto de
        Aprendizado adquirido) Pontos de Vida.
        Qualquer ataque ou habilidade que cause dano,
        poderá remover os Pontos de Vida das vinhas
        automaticamente, sem testes de Precisão ou
        Concentração. Ao remover todos os Pontos de Vida
        das vinhas, o alvo preso será libertado e poderá utilizar
        novamente suas Ações de Movimentação.
        Esta habilidade não poderá ser realizada caso o alvo
        não esteja tocando o solo. A duração desta habilidade
        fora de combate é de 10 minutos. Esta habilidade não
        acumula o seu efeito sobre o mesmo alvo.
        Esta habilidade pode ser utilizada um número de vezes
        por dia igual a 1 + (1 para cada Ponto de Aprendizado
        adquirido).
        Com gestos rápidos e uma breve comunhão com o Primal, o
        Alraune recebe auxilio da essência da natureza.`,
      },
      {
        name: `BELEZA NATURAL`,
        type: `[P]`,
        description: `O Alraune pode realizar um segundo teste de Carisma
        caso tenha falhado no primeiro. Este efeito só pode
        ocorrer uma vez por turno.
        Alraunes carregam consigo uma essência exótica, que para
        muitos é esculpida em sua aparência única, ou no seu jeito de
        se expressar.`,
      },
      {
        name: `LIGAÇÃO COM A NATUREZA`,
        type: `[P]`,
        description: `Sua vida na natureza lhe garantiu diversos
        conhecimentos básicos de sobrevivência, como
        identificar se uma planta ou alimento é venenoso e
        uma pequena comunicação com animais dóceis que
        podem lhe auxiliar brevemente, sem teste algum.
        Assim, um Alraune não precisa se alimentar, mas, por
        conta disso, precisa do dobro de água e de sol
        diariamente para sobreviver. Ambientes desérticos ou
        sem luz solar onde não haja vegetação ou rios são os
        lugares que um Alraune nunca gostaria de ir.
        Como Guardião dos Antigos, o Alraune tem conexão direta
        com a natureza, sendo parte dela.`,
      },
    ],
  },
];

const printBonusRace = (dataRace) => {
  const test = document.querySelector(".specRace");
  test.innerText = `${dataRace[0].name} começam com
  PV: ${dataRace[0].pv}
  PE: ${dataRace[0].pe}
  Dado de Vida: ${dataRace[0].dicePV}
  Dado de Energia: ${dataRace[0].dicePE}
  Ao criar um Alraune, você deve escolher duas das
Perícias a seguir e adicionar 1 ponto fixo em cada uma
na sua ficha: 
• ${dataRace[0].skills}
Além disso, você também tem um ponto fixo em um
dos Atributos a seguir: 
• ${dataRace[0].attributes}`;
  // test.appendChild(creteDiv);
};

const getbonusRace = (value) => {
  const aaa = races.filter((element) => element.name === value);
  printBonusRace(aaa);
};
