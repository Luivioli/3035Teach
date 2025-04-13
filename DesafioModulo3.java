import java.util.Scanner;
import java.util.Random;

public class DesafioModulo3 {
    static final Scanner entrada = new Scanner(System.in);
    static final int[] limite = {51, 101, 201};
    static final Random aleatorio = new Random();

    public static void main(String[] args) {


        System.out.println("Bem-vindo(a) ao menu pricipal! Digite 1-Iniciar Novo Jogo, 2-Ver regras, 3-Ver Histórico de Pontuações e 4-Sair");
        int opc = entrada.nextInt();
        int[] pontuacao = new int[10];

        while (opc < 4) {
            if (opc == 1) {
                System.out.println("Selecione a dificuldade: 1-Facil, 2-Médio e 3-Difícil.");
                int dif = entrada.nextInt();
                switch (dif) {
                    case 1:
                        adivinha(1, 11);
                        System.out.println("Muito bem, digite 1-Iniciar Novo Jogo, 2-Ver regras, 3-Ver Histórico de Pontuações e 4-Sair");
                        opc = entrada.nextInt();
                        break;
                    case 2:
                        adivinha(2, 8);
                        System.out.println("Muito bem, digite 1-Iniciar Novo Jogo, 2-Ver regras, 3-Ver Histórico de Pontuações e 4-Sair");
                        opc = entrada.nextInt();
                        break;
                    case 3:
                        adivinha(3, 6);
                        System.out.println("Muito bem, digite 1-Iniciar Novo Jogo, 2-Ver regras, 3-Ver Histórico de Pontuações e 4-Sair");
                        opc = entrada.nextInt();
                        break;
                }
            }else if (opc == 2) {
                System.out.println("Fácil: Adivinhar um número entre 1 e 50, com 10 tentativas");
                System.out.println("Médio: Adivinhar um número entre 1 e 100, com 7 tentativas");
                System.out.println("Difícil: Adivinhar um número entre 1 e 200, com 5 tentativas");
                System.out.println("Digite 1-Iniciar Novo Jogo, 3-Ver Histórico de Pontuações e 4-Sair");
                opc = entrada.nextInt();
            }else if (opc == 3) {
                for (int i = 0; i < pontuacao.length; i++) {
                    System.out.println("As últimas ponuações foram: " + pontuacao[i]);
                }
                System.out.println("Digite 1-Iniciar Novo Jogo, 2-Ver regras e 4-Sair");
                opc = entrada.nextInt();
            }
        }
        if (opc == 4) {
            System.exit(0);
        }else {
            System.out.println("Por favor, digite 1-Iniciar Novo Jogo, 2-Ver regras, 3-Ver Histórico de Pontuações e 4-Sair");
        }
    }
    public static void adivinha(int dif, int maxTentativa){
        final int maxChute = limite[dif - 1];
        int res = aleatorio.nextInt(maxChute);
        for (int tentativa = 1; tentativa < maxTentativa; tentativa++) {
            System.out.printf("Tentativa " + tentativa + ", tente adivinhar o número de 0 a %d: \n", maxChute - 1);
            int chute = entrada.nextInt();
            if (chute == res) {
                System.out.println("Parabéns! Você acertou na " + tentativa + "º tentativa!");
                tentativa = 11;
            } else if (chute < 0 || chute >= maxChute) {
                System.out.printf("Tente um número de 0 a %d !\n", maxChute - 1);
            }
        }
    }
}