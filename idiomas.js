class GerenciadorIdiomas {
    constructor(chaveArmazenamento = "lumeIdioma") {
        this.chave = chaveArmazenamento;
        this.idiomaPadrao = "pt";
        this.idiomasDisponiveis = ["pt", "en", "es"];
    }

    obterIdioma() {
        const idiomaSalvo = localStorage.getItem(this.chave);

        return this.idiomasDisponiveis.includes(idiomaSalvo)
            ? idiomaSalvo
            : this.idiomaPadrao;
    }

    definirIdioma(idioma) {
        if (!this.idiomasDisponiveis.includes(idioma)) {
            return false;
        }

        localStorage.setItem(this.chave, idioma);
        return true;
    }
}


const traducoesPrivacidade = {
  pt: { noitesReserva: "noites", mesAnterior: "Mês anterior", proximoMes: "Próximo mês", calendarioAria: "Calendário de disponibilidade", disponibilidadeTitulo: "DISPONIBILIDADE", calendarioTitulo: "Calendário", reservasSalvasTitulo: "Reservas salvas",
    privacidadeLink: "Privacidade e proteção de dados", privacidadeFechar: "Fechar aviso de privacidade",
    privacidadeEyebrow: "LUME HOTEL · PRIVACIDADE", privacidadeTitulo: "Privacidade e proteção de dados",
    privDados1: "1. Quais dados coletamos?", privDados1Texto: "Nome, e-mail, telefone opcional, quantidade de hóspedes, quarto escolhido e datas da estadia.",
    privDados2: "2. Para que utilizamos os dados?", privDados2Texto: "Os dados são utilizados exclusivamente para demonstrar o funcionamento do sistema de reservas.",
    privDados3: "3. Onde os dados ficam armazenados?", privDados3Texto: "As reservas ficam armazenadas no armazenamento local do navegador (localStorage), neste dispositivo.",
    privDados4: "4. Compartilhamento de dados", privDados4Texto: "Esta demonstração não possui integração com servidores de reservas ou sistemas de pagamento.",
    privDados5: "5. Exclusão dos dados", privDados5Texto: "Você pode excluir as reservas pelo botão Limpar na área de reservas salvas.",
    privDados6: "6. Seus direitos", privDados6Texto: "A LGPD (Lei nº 13.709/2018) estabelece direitos relacionados ao tratamento de dados pessoais, incluindo acesso, correção e eliminação, conforme as hipóteses legais.",
    privEntendi: "Entendi"
  },
  en: { noitesReserva: "nights", mesAnterior: "Previous month", proximoMes: "Next month", calendarioAria: "Availability calendar", disponibilidadeTitulo: "AVAILABILITY", calendarioTitulo: "Calendar", reservasSalvasTitulo: "Saved reservations",
    privacidadeLink: "Privacy and data protection", privacidadeFechar: "Close privacy notice",
    privacidadeEyebrow: "LUME HOTEL · PRIVACY", privacidadeTitulo: "Privacy and data protection",
    privDados1: "1. What data do we collect?", privDados1Texto: "Name, email, optional phone number, number of guests, selected room and stay dates.",
    privDados2: "2. How do we use the data?", privDados2Texto: "The data is used exclusively to demonstrate how the reservation system works.",
    privDados3: "3. Where is the data stored?", privDados3Texto: "Reservations are stored in this device's browser local storage (localStorage).",
    privDados4: "4. Data sharing", privDados4Texto: "This demonstration is not integrated with reservation servers or payment systems.",
    privDados5: "5. Data deletion", privDados5Texto: "You can delete reservations using the Clear button in the saved reservations area.",
    privDados6: "6. Your rights", privDados6Texto: "Brazil's LGPD (Law No. 13,709/2018) establishes rights regarding the processing of personal data, including access, correction and deletion, as provided by law.",
    privEntendi: "I understand"
  },
  es: { noitesReserva: "noches", mesAnterior: "Mes anterior", proximoMes: "Mes siguiente", calendarioAria: "Calendario de disponibilidad", disponibilidadeTitulo: "DISPONIBILIDAD", calendarioTitulo: "Calendario", reservasSalvasTitulo: "Reservas guardadas",
    privacidadeLink: "Privacidad y protección de datos", privacidadeFechar: "Cerrar aviso de privacidad",
    privacidadeEyebrow: "LUME HOTEL · PRIVACIDAD", privacidadeTitulo: "Privacidad y protección de datos",
    privDados1: "1. ¿Qué datos recopilamos?", privDados1Texto: "Nombre, correo electrónico, teléfono opcional, número de huéspedes, habitación elegida y fechas de la estancia.",
    privDados2: "2. ¿Para qué utilizamos los datos?", privDados2Texto: "Los datos se utilizan exclusivamente para demostrar el funcionamiento del sistema de reservas.",
    privDados3: "3. ¿Dónde se almacenan los datos?", privDados3Texto: "Las reservas se almacenan en el almacenamiento local del navegador (localStorage) de este dispositivo.",
    privDados4: "4. Compartición de datos", privDados4Texto: "Esta demostración no está integrada con servidores de reservas ni sistemas de pago.",
    privDados5: "5. Eliminación de datos", privDados5Texto: "Puedes eliminar las reservas con el botón Limpiar en el área de reservas guardadas.",
    privDados6: "6. Tus derechos", privDados6Texto: "La LGPD brasileña (Ley n.º 13.709/2018) establece derechos relacionados con el tratamiento de datos personales, incluido el acceso, la corrección y la eliminación, según la ley.",
    privEntendi: "Entendido"
  }
};

class Tradutor {
    constructor(gerenciador) {
        this.gerenciador = gerenciador;

        this.traducoes = {
    pt: {
        inicio: "Início",
        quartos: "Quartos",
        experiencia: "Experiência",
        reservar: "Reservar",
        tituloLinha1: "Seu tempo.",
        tituloLinha2: "Seu refúgio.",
        descricaoPrincipal: "Conforto contemporâneo, momentos tranquilos e uma estadia feita para você.",
        botaoPrincipal: "Planejar minha estadia",
        boasVindas: "BEM-VINDO AO LUME",
        introTitulo: "Mais do que uma hospedagem.",
        introDestaque: "Um jeito de se sentir bem.",
        introDescricao: "Um espaço pensado para desacelerar, aproveitar cada detalhe e transformar uma viagem em boas lembranças.",
        acomodacoes: "ACOMODAÇÕES",
        encontreEspaco: "Encontre seu espaço",
        verDisponibilidade: "Ver disponibilidade ↗",
        essencial: "ESSENCIAL",
        quartoLume: "Quarto LUME",
        descricaoLume: "Conforto, funcionalidade e tranquilidade para descansar bem.",
        porNoite: "/ noite",
        confortoExtra: "CONFORTO EXTRA",
        quartoDeluxe: "Quarto Deluxe",
        descricaoDeluxe: "Mais espaço, detalhes especiais e uma atmosfera acolhedora.",
        exclusividade: "EXCLUSIVIDADE",
        suiteLume: "Suíte LUME",
        descricaoSuite: "Uma estadia especial com amplitude e um toque de sofisticação.",
        experienciaTitulo: "EXPERIÊNCIA LUME",
        experienciaLinha1: "Seu bem-estar",
        experienciaLinha2: "vem primeiro.",
        experienciaDescricao: "Pequenos detalhes que ajudam você a aproveitar cada momento, seja a trabalho ou lazer.",
        escolherDatas: "Escolher minhas datas",
        cafeManha: "Café da manhã",
        cafeDescricao: "Comece o dia bem.",
        piscina: "Piscina",
        piscinaDescricao: "Um tempo para relaxar.",
        coworking: "Coworking",
        coworkingDescricao: "Produtividade com conforto.",
        areaDescanso: "Área de descanso",
        descansoDescricao: "Desacelere um pouco.",
        exploreLume: "EXPLORE O LUME",
        detalhesDiferenca: "Detalhes que fazem a diferença",
        galeriaDescricao: "Conheça um pouco dos espaços que tornam sua estadia especial.",
        piscinaRelaxamento: "Piscina & relaxamento",
        respiroRotina: "Um respiro na rotina",
        saboresAproveitar: "Sabores para aproveitar",
        espacosDesacelerar: "Espaços para desacelerar",
        designAconchego: "Design e aconchego",
        proximaPausa: "SUA PRÓXIMA PAUSA COMEÇA AQUI",
        reservarMomento: "Vamos reservar seu momento?",
        consultarDatas: "Consultar datas disponíveis",
        fraseRodape: "Seu lugar para ficar, descansar e aproveitar.",
        projetoDemonstrativo: "© 2026 LUME Hotel · Projeto demonstrativo",
        acessoAdministrativo: "Acesso administrativo",
        reservaTitulo: "Vamos planejar",
        reservaDestaque: "seus dias no LUME.",
        reservaDescricao: "Escolha sua acomodação e as datas. O calendário ajuda a visualizar os períodos já reservados neste navegador.",
        suaEstadia: "SUA ESTADIA",
        pularConteudo: "Pular para o conteúdo principal",
        acomodacao: "ACOMODAÇÃO",
        escolhaQuarto: "Escolha seu quarto",
        imagensIlustrativas: "Imagens ilustrativas para apresentação do projeto.",
        datasEstadia: "DATAS DA ESTADIA",
        hospedes: "Hóspedes",
        nomeCompleto: "Nome completo",
        seuNome: "Seu nome",
        cpf: "CPF",
        email: "E-mail",
        telefoneOpcional: "Telefone (opcional)",
        ajudaTelefone: "Telefone opcional. O check-out é o dia da saída e não conta como diária.",
        confirmarReserva: "Confirmar reserva de demonstração ↗",
        avisoDemo: "Projeto acadêmico: esta versão salva reservas somente neste navegador. Não processa pagamentos nem confirma disponibilidade em outros dispositivos.",
        resumoEstadia: "RESUMO DA ESTADIA",
        diaria: "Diária",
        noites: "Noites",
        totalEstimado: "Total estimado",
        selecioneDatas: "Selecione as datas",
        disponibilidade: "DISPONIBILIDADE",
    calendario: "Calendário",
    livre: "Livre",
    reservado: "Reservado",
    selecionado: "Selecionado",
    focoTeclado: "Foco do teclado",
    notaCalendario: "Selecione um dia no calendário para preencher o check-in. Dias reservados para o quarto escolhido aparecem marcados.",
    nesteNavegador: "NESTE NAVEGADOR",
    reservasSalvas: "Reservas salvas",
    limpar: "Limpar",
    nenhumaReserva: "Nenhuma reserva salva ainda."
,
        checkin: 'Check-in',
        checkout: 'Check-out',
        umHospede: '1 hóspede',
        doisHospedes: '2 hóspedes',
        tresHospedes: '3 hóspedes',
        quatroHospedes: '4 hóspedes',
        seuNome: 'Seu nome',
        placeholderEmail: 'voce@email.com',
        meses: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        semReservasQuarto: 'Nenhuma reserva salva para este quarto neste navegador.',
        cancelarReserva: 'Cancelar reserva',
        confirmarCancelamento: 'Cancelar a reserva',
        reservaCancelada: 'Reserva cancelada neste navegador.',
        dataPassada: 'Data passada',
        dataReservada: 'Data reservada para este quarto',
        dataPassadaAcessivel: 'Data passada, indisponível.',
        dataReservadaAcessivel: 'Data reservada, indisponível.',
        dataSelecionadaAcessivel: 'Data selecionada.',
        dataLivreAcessivel: 'Data livre. Disponível para seleção.',
        periodoOcupado: 'Esse período inclui dias já reservados. Escolha outras datas.',
        noite: 'noite',
        noites: 'noites',
        diasSemana: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        nesteNavegador: 'NESTE NAVEGADOR',
        reservasSalvas: 'Reservas salvas',
        limpar: 'Limpar',
        nenhumaReserva: 'Nenhuma reserva salva ainda.'
    },

    en: {
        inicio: "Home",
        quartos: "Rooms",
        experiencia: "Experience",
        reservar: "Book now",
        tituloLinha1: "Your time.",
        tituloLinha2: "Your retreat.",
        descricaoPrincipal: "Contemporary comfort, peaceful moments and a stay designed for you.",
        botaoPrincipal: "Plan my stay",
        boasVindas: "WELCOME TO LUME",
        introTitulo: "More than just a stay.",
        introDestaque: "A place to feel good.",
        introDescricao: "A space designed to slow down, enjoy every detail and turn a trip into beautiful memories.",
        acomodacoes: "ACCOMMODATIONS",
        encontreEspaco: "Find your space",
        verDisponibilidade: "Check availability ↗",
        essencial: "ESSENTIAL",
        quartoLume: "LUME Room",
        descricaoLume: "Comfort, functionality and tranquility for a restful stay.",
        porNoite: "/ night",
        confortoExtra: "EXTRA COMFORT",
        quartoDeluxe: "Deluxe Room",
        descricaoDeluxe: "More space, special details and a welcoming atmosphere.",
        exclusividade: "EXCLUSIVITY",
        suiteLume: "LUME Suite",
        descricaoSuite: "A special stay with spacious surroundings and a touch of sophistication.",
        experienciaTitulo: "LUME EXPERIENCE",
        experienciaLinha1: "Your well-being",
        experienciaLinha2: "comes first.",
        experienciaDescricao: "Small details that help you enjoy every moment, whether for work or leisure.",
        escolherDatas: "Choose my dates",
        cafeManha: "Breakfast",
        cafeDescricao: "Start your day right.",
        piscina: "Swimming pool",
        piscinaDescricao: "Take some time to relax.",
        coworking: "Coworking",
        coworkingDescricao: "Productivity with comfort.",
        areaDescanso: "Lounge area",
        descansoDescricao: "Slow down for a while.",
        exploreLume: "EXPLORE LUME",
        detalhesDiferenca: "Details that make a difference",
        galeriaDescricao: "Discover some of the spaces that make your stay special.",
        piscinaRelaxamento: "Pool & relaxation",
        respiroRotina: "A break from routine",
        saboresAproveitar: "Flavors to enjoy",
        espacosDesacelerar: "Spaces to unwind",
        designAconchego: "Design and comfort",
        proximaPausa: "YOUR NEXT BREAK STARTS HERE",
        reservarMomento: "Shall we book your moment?",
        consultarDatas: "Check available dates",
        fraseRodape: "Your place to stay, relax and enjoy.",
        projetoDemonstrativo: "© 2026 LUME Hotel · Demonstration project",
        acessoAdministrativo: "Administrative access",
        reservaTitulo: "Let's plan",
        reservaDestaque: "your days at LUME.",
        reservaDescricao: "Choose your accommodation and dates. The calendar helps you view periods already booked in this browser.",
        suaEstadia: "YOUR STAY",
        pularConteudo: "Skip to main content",
        acomodacao: "ACCOMMODATION",
        escolhaQuarto: "Choose your room",
        imagensIlustrativas: "Illustrative images for project presentation.",
        datasEstadia: "STAY DATES",
        hospedes: "Guests",
        nomeCompleto: "Full name",
        seuNome: "Your name",
        cpf: "CPF",
        email: "Email",
        telefoneOpcional: "Phone (optional)",
        ajudaTelefone: "Phone is optional. Check-out is the departure day and is not charged as a night.",
        confirmarReserva: "Confirm demo reservation ↗",
        avisoDemo: "Academic project: this version saves reservations only in this browser. It does not process payments or confirm availability on other devices.",
        resumoEstadia: "STAY SUMMARY",
        diaria: "Daily rate",
        noites: "Nights",
        totalEstimado: "Estimated total",
        selecioneDatas: "Select dates",
        disponibilidade: "AVAILABILITY",
        calendario: "Calendar",
        livre: "Available",
        reservado: "Reserved",
        selecionado: "Selected",
        focoTeclado: "Keyboard focus",
        notaCalendario: "Select a day on the calendar to fill in check-in. Dates reserved for the selected room are marked.",
        nesteNavegador: "IN THIS BROWSER",
        reservasSalvas: "Saved reservations",
        limpar: "Clear",
        nenhumaReserva: "No reservations saved yet."

,
        checkin: 'Check-in',
        checkout: 'Check-out',
        umHospede: '1 guest',
        doisHospedes: '2 guests',
        tresHospedes: '3 guests',
        quatroHospedes: '4 guests',
        seuNome: 'Your name',
        placeholderEmail: 'you@email.com',
        meses: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        semReservasQuarto: 'No reservations saved for this room in this browser.',
        cancelarReserva: 'Cancel reservation',
        confirmarCancelamento: 'Cancel reservation',
        reservaCancelada: 'Reservation canceled in this browser.',
        dataPassada: 'Past date',
        dataReservada: 'Reserved date for this room',
        dataPassadaAcessivel: 'Past date, unavailable.',
        dataReservadaAcessivel: 'Reserved date, unavailable.',
        dataSelecionadaAcessivel: 'Selected date.',
        dataLivreAcessivel: 'Available date. Select to book.',
        periodoOcupado: 'This period includes dates already reserved. Please choose other dates.',
        noite: 'night',
        noites: 'nights',
        diasSemana: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        nesteNavegador: 'IN THIS BROWSER',
        reservasSalvas: 'Saved reservations',
        limpar: 'Clear',
        nenhumaReserva: 'No reservations saved yet.'
    },

    es: {
        inicio: "Inicio",
        quartos: "Habitaciones",
        experiencia: "Experiencia",
        reservar: "Reservar",
        tituloLinha1: "Tu tiempo.",
        tituloLinha2: "Tu refugio.",
        descricaoPrincipal: "Confort contemporáneo, momentos tranquilos y una estancia pensada para ti.",
        botaoPrincipal: "Planificar mi estancia",
        boasVindas: "BIENVENIDO A LUME",
        introTitulo: "Mucho más que un alojamiento.",
        introDestaque: "Un lugar para sentirse bien.",
        introDescricao: "Un espacio pensado para relajarse, disfrutar cada detalle y transformar un viaje en buenos recuerdos.",
        acomodacoes: "ALOJAMIENTOS",
        encontreEspaco: "Encuentra tu espacio",
        verDisponibilidade: "Ver disponibilidad ↗",
        essencial: "ESENCIAL",
        quartoLume: "Habitación LUME",
        descricaoLume: "Comodidad, funcionalidad y tranquilidad para descansar bien.",
        porNoite: "/ noche",
        confortoExtra: "CONFORT EXTRA",
        quartoDeluxe: "Habitación Deluxe",
        descricaoDeluxe: "Más espacio, detalles especiales y un ambiente acogedor.",
        exclusividade: "EXCLUSIVIDAD",
        suiteLume: "Suite LUME",
        descricaoSuite: "Una estancia especial con amplitud y un toque de sofisticación.",
        experienciaTitulo: "EXPERIENCIA LUME",      
        experienciaLinha1: "Tu bienestar",
        experienciaLinha2: "es lo primero.",
        experienciaDescricao: "Pequeños detalles que te ayudan a disfrutar cada momento, ya sea por trabajo o placer.", 
        escolherDatas: "Elegir mis fechas",
        cafeManha: "Desayuno",
        cafeDescricao: "Empieza bien el día.",
        piscina: "Piscina",
        piscinaDescricao: "Un momento para relajarte.",
        coworking: "Coworking",
        coworkingDescricao: "Productividad con comodidad.",
        areaDescanso: "Zona de descanso",
        descansoDescricao: "Desconecta un poco.",
        exploreLume: "EXPLORA LUME",
        detalhesDiferenca: "Detalles que marcan la diferencia",
        galeriaDescricao: "Conoce algunos de los espacios que hacen especial tu estancia.",
        piscinaRelaxamento: "Piscina y relajación",
        respiroRotina: "Un respiro en la rutina",
        saboresAproveitar: "Sabores para disfrutar",
        espacosDesacelerar: "Espacios para relajarse",
        designAconchego: "Diseño y comodidad",
        proximaPausa: "TU PRÓXIMA PAUSA COMIENZA AQUÍ",
        reservarMomento: "¿Reservamos tu momento?",
        consultarDatas: "Consultar fechas disponibles",
        fraseRodape: "Tu lugar para alojarte, descansar y disfrutar.",
        projetoDemonstrativo: "© 2026 LUME Hotel · Proyecto demostrativo",
        acessoAdministrativo: "Acceso administrativo",
        reservaTitulo: "Planeemos",
        reservaDestaque: "tus días en LUME.",
        reservaDescricao: "Elige tu alojamiento y las fechas. El calendario te permite ver los períodos ya reservados en este navegador.",
        suaEstadia: "TU ESTANCIA",
        pularConteudo: "Saltar al contenido principal",
        acomodacao: "ALOJAMIENTO",
        escolhaQuarto: "Elige tu habitación",
        imagensIlustrativas: "Imágenes ilustrativas para la presentación del proyecto.",
        datasEstadia: "FECHAS DE LA ESTANCIA",
        hospedes: "Huéspedes",
        nomeCompleto: "Nombre completo",
        seuNome: "Tu nombre",
        cpf: "CPF",
        email: "Correo electrónico",
        telefoneOpcional: "Teléfono (opcional)",
        ajudaTelefone: "El teléfono es opcional. El check-out es el día de salida y no cuenta como noche.",
        confirmarReserva: "Confirmar reserva de demostración ↗",
        avisoDemo: "Proyecto académico: esta versión guarda las reservas solo en este navegador. No procesa pagos ni confirma disponibilidad en otros dispositivos.",
        resumoEstadia: "RESUMEN DE LA ESTANCIA",
        diaria: "Precio por noche",
        noites: "Noches",
        totalEstimado: "Total estimado",
        selecioneDatas: "Selecciona las fechas",
        disponibilidade: "DISPONIBILIDAD",
        calendario: "Calendario",
        livre: "Disponible",
        reservado: "Reservado",
        selecionado: "Seleccionado",
        focoTeclado: "Foco del teclado",
        notaCalendario: "Selecciona un día en el calendario para completar el check-in. Las fechas reservadas para la habitación elegida aparecen marcadas.",
        nesteNavegador: "EN ESTE NAVEGADOR",
        reservasSalvas: "Reservas guardadas",
        limpar: "Limpiar",
        nenhumaReserva: "Todavía no hay reservas guardadas."
,
        checkin: 'Entrada',
        checkout: 'Salida',
        umHospede: '1 huésped',
        doisHospedes: '2 huéspedes',
        tresHospedes: '3 huéspedes',
        quatroHospedes: '4 huéspedes',
        seuNome: 'Tu nombre',
        placeholderEmail: 'tu@email.com',
        meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        semReservasQuarto: 'No hay reservas guardadas para esta habitación en este navegador.',
        cancelarReserva: 'Cancelar reserva',
        confirmarCancelamento: 'Cancelar la reserva',
        reservaCancelada: 'Reserva cancelada en este navegador.',
        dataPassada: 'Fecha pasada',
        dataReservada: 'Fecha reservada para esta habitación',
        dataPassadaAcessivel: 'Fecha pasada, no disponible.',
        dataReservadaAcessivel: 'Fecha reservada, no disponible.',
        dataSelecionadaAcessivel: 'Fecha seleccionada.',
        dataLivreAcessivel: 'Fecha disponible para seleccionar.',
        periodoOcupado: 'Este período incluye días ya reservados. Elige otras fechas.',
        noite: 'noche',
        noites: 'noches',
        diasSemana: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        nesteNavegador: 'EN ESTE NAVEGADOR',
        reservasSalvas: 'Reservas guardadas',
        limpar: 'Limpiar',
        nenhumaReserva: 'Todavía no hay reservas guardadas.'
    }
};
    }

    aplicarIdioma() {
        const idioma = this.gerenciador.obterIdioma();
        const textos = this.traducoes[idioma] || this.traducoes.pt;
        Object.assign(textos, traducoesPrivacidade[idioma] || {});

        document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;

        document.querySelectorAll("[data-traducao]").forEach(elemento => {
            const chave = elemento.dataset.traducao;
            const texto = textos[chave];
            if (texto !== undefined && typeof texto === "string") elemento.textContent = texto;
        });
        document.querySelectorAll("[data-aria-traducao]").forEach(elemento => {
            const texto = textos[elemento.dataset.ariaTraducao];
            if (texto !== undefined) elemento.setAttribute("aria-label", texto);
        });
        document.querySelectorAll("[data-placeholder-traducao]").forEach(elemento => {
            const texto = textos[elemento.dataset.placeholderTraducao];
            if (texto !== undefined) elemento.setAttribute("placeholder", texto);
        });

        window.lumeTraduzir = chave => textos[chave] ?? this.traducoes.pt[chave] ?? chave;
        document.dispatchEvent(new CustomEvent("lume:idioma-alterado", { detail: { idioma } }));
        return idioma;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const gerenciadorIdiomas = new GerenciadorIdiomas();
    const tradutor = new Tradutor(gerenciadorIdiomas);

    const botoesIdioma = document.querySelectorAll(
        ".seletor-idioma button"
    );

    botoesIdioma.forEach(botao => {
        botao.addEventListener("click", () => {

            const idioma = botao.dataset.idioma;

            if (gerenciadorIdiomas.definirIdioma(idioma)) {
                tradutor.aplicarIdioma();
                atualizarBotoes(idioma);
            }
        });
    });

    function atualizarBotoes(idiomaAtual) {
        botoesIdioma.forEach(botao => {
            botao.setAttribute(
                "aria-pressed",
                botao.dataset.idioma === idiomaAtual ? "true" : "false"
            );
        });
    }

    const idiomaInicial = tradutor.aplicarIdioma();
    atualizarBotoes(idiomaInicial);

});
