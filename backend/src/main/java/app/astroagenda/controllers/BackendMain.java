package app.astroagenda.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
@RestController
public class BackendMain {

	public static void main(String[] args) {
		Dotenv.configure().load();
		SpringApplication.run(BackendMain.class, args);
	}

	@GetMapping("/")
	public String apiRoot() {
		return "AstroAgenda Backend";
	}

}
