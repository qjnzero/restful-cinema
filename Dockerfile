FROM openjdk:11.0.4-jre-slim
EXPOSE 8080
COPY build/libs/restfulcinema.jar /
ENTRYPOINT ["java", "-jar", "restfulcinema.jar"]