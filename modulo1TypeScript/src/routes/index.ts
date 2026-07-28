import { Router, Request, Response } from 'express';
import { listarArtesaos } from '../services/artesaoService';
import { validarContato, salvarContato } from '../services/contatoService';
import { Contato } from '../models/Contato';

const router = Router();

// GET / — Página principal (renderiza EJS)
router.get('/', (req: Request, res: Response): void => {
  const artesaos = listarArtesaos();
  res.render('index', { artesaos, flash: null });
});

// POST /contato — Processar formulário
router.post('/contato', (req: Request, res: Response): void => {
  const { nome, email, telefone, 'tipo-artesanato': tipoArtesanato, mensagem } = req.body;

  const dados: Partial<Contato> = { nome, email, telefone, tipoArtesanato, mensagem };
  const validacao = validarContato(dados);

  if (!validacao.valido) {
    // Se for requisição AJAX
    if (req.headers.accept === 'application/json') {
      res.status(400).json({ success: false, errors: validacao.erros });
      return;
    }
    const artesaos = listarArtesaos();
    res.render('index', { artesaos, flash: { type: 'error', messages: validacao.erros } });
    return;
  }

  salvarContato(dados as Contato);

  if (req.headers.accept === 'application/json') {
    res.status(201).json({ success: true, message: 'Mensagem recebida!' });
    return;
  }

  const artesaos = listarArtesaos();
  res.render('index', {
    artesaos,
    flash: { type: 'success', messages: ['✅ Mensagem enviada com sucesso!'] }
  });
});

// GET /api/artesaos — API JSON
router.get('/api/artesaos', (req: Request, res: Response): void => {
  res.json(listarArtesaos());
});

export default router;
