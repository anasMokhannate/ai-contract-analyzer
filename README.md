# AI Contract Analyzer

**AI Contract Analyzer** is an intelligent tool designed to automate the analysis and review of contracts. It leverages advanced Natural Language Processing (NLP) and AI techniques to extract key information, identify risks, and summarize contract clauses, helping legal professionals, businesses, and contract managers streamline their workflows and improve accuracy.

---

## Features

- **Clause Extraction:** Automatically identifies and segments clauses from contract documents.
- **Risk Detection:** Highlights potentially risky or non-compliant clauses.
- **Entity Recognition:** Extracts important entities such as dates, parties, obligations, penalties, and more.
- **Summary Generation:** Provides concise summaries of contract sections for quick review.
- **Multi-format Support:** Accepts contracts in PDF, DOCX, and text formats.
- **User-friendly Interface:** Simple UI to upload contracts and view analysis results.
- **Expandable Modular Architecture:** Easily extend functionality with new AI models or custom rules.

---

## Technology Stack

- **Frontend:** React.js for the user interface
- **Backend:** Python with Flask framework
- **AI/NLP:** Ollama 
- **Data Storage:** PostgreSQL database for contract metadata
- **Deployment:** Docker for containerized setup

---

## Installation & Setup

- Clone the repository:

  ```bash
  git clone https://github.com/anasMokhannate/ai-contract-analyzer.git
  cd ai-contract-analyzer
  ```

- Set up backend (assuming Python environment):

  ```bash
  python -m venv venv
  # On Windows use `venv\Scripts\activate`
  pip install -r requirements.txt
  ```

- Run backend server:

  ```bash
  python app.py
  ```

- Set up frontend:

  ```bash
  cd frontend
  npm install
  npm start
  ```

- Open your browser at `http://localhost:3000` to access the application.

---

## Usage

- Upload your contract file using the web interface.
- The AI engine processes the document to extract clauses, detect risks, and identify key entities.
- Review analysis results displayed interactively.
- Export reports or flagged items as needed.

---

## Project Structure

```
/backend       # Python API server and AI logic
/frontend      # React user interface
/models       # Pretrained or custom AI/NLP models
/docs         # Documentation and design resources
```

---

## Future Improvements

- Support for more languages and legal jurisdictions.
- Integration with electronic signature and contract lifecycle management platforms.
- Enhanced risk scoring with legal expert feedback.
- Real-time collaboration and annotation features.
- Mobile-friendly UI and offline analysis mode.

---

## License

This project is licensed under the MIT License.
