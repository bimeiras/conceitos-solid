import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const foundUser = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(foundUser);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
