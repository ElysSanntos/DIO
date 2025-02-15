# 🚀 Como Usar Configuration Properties no Spring Boot de Forma Eficiente

No Spring Boot, o uso de `Configuration Properties` é uma maneira muito poderosa de gerenciar configurações de maneira centralizada e organizada. Neste guia, vou explicar de forma simples como você pode utilizar o `application.properties` e a anotação `@ConfigurationProperties` para melhorar a estrutura do seu código.

## ✔ O Que São Configuration Properties?
O `application.properties` (ou `application.yml`) é o arquivo onde você armazena configurações da sua aplicação. Ao usar a anotação `@ConfigurationProperties`, você consegue mapear automaticamente essas configurações para um objeto Java.

Isso permite que você centralize todas as configurações e evite "hardcoding" (informações fixas no código), o que facilita a manutenção e torna o código mais limpo.

## ✔ Como Implementar

### 1. **Adicionar a Dependência no `pom.xml`**

Primeiro, você precisa garantir que tenha a dependência do Spring Boot configurada corretamente. No seu `pom.xml`, adicione a seguinte dependência:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
</dependency>
Isso garante que o Spring Boot processará suas propriedades corretamente.

```


2. Criar uma Classe de Configuração
Agora, crie uma classe que irá mapear as propriedades do seu application.properties. Por exemplo, para configurar um remetente de e-mail, você pode criar uma classe chamada RemetenteConfig:


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "remetente")
public class RemetenteConfig {

    private String nome;
    private String email;
    private String telefone;

    // Getters e Setters
}

3. Configurar as Propriedades no application.properties
No arquivo application.properties, defina as propriedades associadas ao seu objeto RemetenteConfig. Por exemplo:

```
remetente.nome=NoReply
remetente.email=noreply@example.com
remetente.telefone=123456789
```

4. Injeção de Dependência
Agora, em qualquer lugar da sua aplicação, você pode injetar esse objeto de configuração usando a anotação @Autowired:

```

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RemetenteController {

    @Autowired
    private RemetenteConfig remetenteConfig;

    @GetMapping("/remetente")
    public String getRemetenteInfo() {
        return "Nome: " + remetenteConfig.getNome() + ", Email: " + remetenteConfig.getEmail() + ", Telefone: " + remetenteConfig.getTelefone();
    }
}
```

5. Rodando o Projeto
Quando você rodar o projeto, o Spring Boot irá automaticamente injetar as propriedades do application.properties na sua classe de configuração e você poderá usá-las em sua aplicação.

### ✔ Benefícios de Usar Configuration Properties
Centralização das Configurações: Tudo o que é relacionado a configuração pode ser mantido em um único lugar.
Facilidade de Manutenção: Alterações em configurações não exigem mudanças no código, apenas no arquivo de propriedades.
Desacoplamento: Suas classes de lógica de negócio ficam desacopladas das configurações, o que facilita testes e alterações.
Escalabilidade: Permite que você crie várias versões da sua aplicação para diferentes ambientes (desenvolvimento, produção, etc.) sem mudar o código.

## 🚀 Conclusão

Ao centralizar as configurações usando Configuration Properties, você torna o código mais limpo, organizado e fácil de manter. Isso também ajuda a escalar a aplicação e a criar versões diferentes da mesma aplicação para diversos ambientes sem alterar o código.