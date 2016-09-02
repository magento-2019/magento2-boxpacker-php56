![valid XHTML][checkmark]
[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/Red_star_32_32.png "MOZG"
[requirements]: https://mozg.loggly.com/search
[github-boxpacker]: https://github.com/dvdoug/BoxPacker
[getcomposer]: https://getcomposer.org/
[uninstall-mods]: http://devdocs.magento.com/guides/v2.1/install-gde/install/cli/install-cli-uninstall-mods.html

# Mozg\BoxPacker

## Sinopse

Módulo requerido para funcionamento dos demais módulos de entrega

## Motivação

Atender o mercado de módulos para Magento oferecendo um excelente suporte

## Característica técnica

Se trata do ambiente para definição das dimensões de cada uma de suas Embalagem/Caixa

No sistema de Gerenciamento de Caixa/Embalagem foram pré-cadastrados registros para as seguintes embalagens no formato Caixa, vinculadas ao devido método de entrega

https://www.correios.com.br/para-voce/envio/embalagens-para-envios

http://www.jadlog.com.br/tamanhos.html

Como a Jamef não disponibiliza em seu site uma tabela semelhante as demais transportadora foi criado apenas um registro genérico vinculado a todos os métodos de entrega

No backend do Magento acesse o menu: MOZG -> Gerenciar Caixa/Embalagem -> cadastre as devidas embalagens que pode ser usado em sua loja

Dessa forma o módulo deve escolher a embalagem que deve adequar os devidos produtos no processo de compra

Como só tem 1 registro associado a Jamef que seria o registro 

"Caixa de Encomenda Genérica: Tipo 1, Dimensões (LxCxA): 14 x 18 x 9 cm, PesoMax: 10 kg, Preço: R$ 3,50"

Pode ser exibido o retorno

"Dimensões (LxCxA): 49 x 49 x 8 cm | Peso = 9.9 kg não há embalagem associada a essa modalidade de frete ou embalagem compatível para atender as dimensões / peso desse produto"

Para ser processado essa consulta do valor de frete você deve cadastrar uma embalagem para atender essa dimensão e a mesma deve atender qualquer produto com dimensões abaixo dessa embalagem

Então se cadastramos uma embalagem com dimensões "(LxCxA): 50 x 50 x 10 cm" essa embalagem deve atender esse produto e pode ser distribuído nessa mesma embalagem diversos outros produtos

## Instalação - Atualização - Desinstalação

Este módulo destina-se a ser instalado usando o [Composer][getcomposer]

Antes de executar os processos, [clique aqui][requirements] e leia os pré-requisitos e sugestões

--

### Para instalar o módulo execute o comando a seguir no terminal do seu servidor

	composer require mozgbrasil/magento2-boxpacker-php56 && php bin/magento setup:upgrade

Você pode verificar se o módulo está instalado, indo ao backend em:

	STORES -> Configuration -> ADVANCED/Advanced -> Disable Modules Output

--

### Para atualizar o módulo execute o comando a seguir no terminal do seu servidor

	composer update && php bin/magento setup:upgrade

--

### Para [desinstalar][uninstall-mods] o módulo execute o comando a seguir no terminal do seu servidor

	bin/magento module:uninstall --remove-data --backup-code --backup-media --backup-db Mozg_Boxpacker

~~composer remove mozgbrasil/magento2-boxpacker-php56 && composer clear-cache && composer update && php bin/magento setup:upgrade~~

## Como configurar o método

Você terá os campos a seguir

### • **Ativar**

Para "ativar" ou "desativar" o uso do registro

### • **Descrição**

Indentificação da embalagem

### • **Largura exterior**

Largura exterior em centímetros

Para a medida de 1 milímetro, informe ".01" onde deve ser convertido pelo Magento para "0.0100"

Para a medida de 1 centimetro, informe "1" onde deve ser convertido pelo Magento para "1.0000"

Para a medida de 1 metro, informe "100" onde deve ser convertido pelo Magento para "100.0000"  

### • **Comprimento exterior**

Comprimento exterior em centímetros

### • **Altura exterior**

Altura exterior em centímetros

### • **Largura Interior**

Largura interna em centímetros

### • **Comprimento Interior**

Comprimento interno em centímetros

### • **Altura Interior**

Altura interior em centímetros

### • **Peso da embalagem vazia**

Peso da embalagem vazia em Kilos

Para um peso de 8 gramas, informe ".008" onde deve ser convertido pelo Magento para "0.0080"

Para um peso de 80 gramas, informe ".08" onde deve ser convertido pelo Magento para "0.0800"

Para um peso de 800 gramas, informe ".8" onde deve ser convertido pelo Magento para "0.8000"

Para um peso de 1 kilo, informe "1" onde deve ser convertido pelo Magento para "1.0000"

### • **Peso máximo**

Peso máximo suportado pela embalagem

### • **Preço**

Preço da embalagem

### • **Comentário**

Comentário

### • **Método de entrega**

Selecione o método de entrega que está relacionado a embalagem, a não seleção deve atender todos os métodos de entrega

## Perguntas mais frequentes "FAQ"

### Quais os atributos criados que devem ser usado pelos método de entrega?

No processo de instalação do módulo é criado os seguintes atributos de Produto:

ship_separately = Embalar o produto separadamente
width = Largura da embalagem do produto (cm)
lenght = Comprimento da embalagem do produto (cm)
height = Altura da embalagem do produto (cm)

Os atributos "Comprimento, Largura, Altura" são parâmetros necessários para acomodação dos itens nas embalagens, podendo ser utilizado para envio ao WebService e também ao calculo do peso cúbico, portanto sugiro editar cada produto informando suas medidas

### Quais as embalagens pré-cadastradas ?

O módulo contem as seguintes embalagens pré-cadastradas, caso queira desative as mesmas e cadastre novas embalagens

http://www.correios.com.br/para-voce/envio/embalagens-para-envios

http://www.jadlog.com.br/tamanhos.html

### Links úteis

http://www2.correios.com.br/sistemas/precosPrazos/

http://shopping.correios.com.br/wbm/store/script/wbm2400902p01.aspx?cd_company=ErZW8Dm9i54=&cd_department=R9kapHuB0uA=

http://criativaembalagens.com.br/57_caixas-padrao-correio_correios--e-comerce_28

http://blog.elo7.com.br/negocio-criativo/guia-completo-para-enviar-produtos-pelos-correios.html

## Contribuintes

Equipe Mozg

## License

[Comercial License] (LICENSE.txt)

## Badges

[![Join the chat at https://gitter.im/mozgbrasil](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mozgbrasil/)
[![Latest Stable Version](https://poser.pugx.org/mozgbrasil/magento2-boxpacker-php56/v/stable)](https://packagist.org/packages/mozgbrasil/magento2-boxpacker-php56)
[![Total Downloads](https://poser.pugx.org/mozgbrasil/magento2-boxpacker-php56/downloads)](https://packagist.org/packages/mozgbrasil/magento2-boxpacker-php56)
[![Latest Unstable Version](https://poser.pugx.org/mozgbrasil/magento2-boxpacker-php56/v/unstable)](https://packagist.org/packages/mozgbrasil/magento2-boxpacker-php56)
[![License](https://poser.pugx.org/mozgbrasil/magento2-boxpacker-php56/license)](https://packagist.org/packages/mozgbrasil/magento2-boxpacker-php56)
[![Monthly Downloads](https://poser.pugx.org/mozgbrasil/magento2-boxpacker-php56/d/monthly)](https://packagist.org/packages/mozgbrasil/magento2-boxpacker-php56)
[![Daily Downloads](https://poser.pugx.org/mozgbrasil/magento2-boxpacker-php56/d/daily)](https://packagist.org/packages/mozgbrasil/magento2-boxpacker-php56)

:cat2:
