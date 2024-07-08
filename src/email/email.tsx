import * as React from "react";
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  
interface ArkanInviteCLientEmailProps {
  name: string;
  email: string;
  phone: string;
  peopleType: string;
  demand: string;
  service: string;
  isClient: string;
  }
  
const ArkanInviteCLientEmail = ({
  name,
  email,
  phone,
  peopleType,
  demand,
  service,
  isClient
  }: ArkanInviteCLientEmailProps) => {
    const previewText = `Informações do cliente`;
    const previewUrl = "http://localhost:3000/email";
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto px-5 pb-5 max-w-[465px]">
              <Section>
              <Img
                className="w-[425px] object-cover rounded-full"
                src="https://scontent.frec5-1.fna.fbcdn.net/v/t39.30808-6/380697712_765556835580568_6746200764253045902_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=P3c_5A6xmJ0Q7kNvgH6ibbN&_nc_pt=1&_nc_ht=scontent.frec5-1.fna&oh=00_AYATImdk6Oc4g3c2A5GntHlcA8TdqZgYuYj4cZLfUjKxpw&oe=6683E7FA"
                alt="Background Arkan Email"
              />
              </Section>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Join <strong className="text-[#091929]">You</strong> on <strong className="text-[#FFB60F]">Arkan</strong>
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Olá chefes, Aqui está as informações do cliente que acabou de se cadastrar no formulário:
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Nome:</strong> {name}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Telefone:</strong> {phone}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Tipo de pessoa:</strong> {peopleType}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Demandas:</strong> {demand}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Serviços:</strong> {service}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Cliente:</strong> {isClient}
              </Text>

              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                Esta mensagem contém as informações do cliente solicitadas pela empresa{" "}
                <span className="text-[#FFB60F]">Arkan</span>. As informações dos <span className="text-[#FFB60F]">clientes</span> são essenciais para a empresa, pois elas permitem análises aprofundadas que impulsionam nosso <span className="text-[#FFB60F]">progresso</span> e aperfeiçoam nossos serviços. Caso tenha alguma <span className="text-[#FFB60F]">dúvida</span> ou preocupação sobre a segurança das informações, responda a este e-mail para entrar em contato conosco.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };

export default ArkanInviteCLientEmail
  