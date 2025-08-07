const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'segredo_super_secreto';

router.post('/register', async (req, res) => {
  const { nome, serie, senha } = req.body;
  const hashedSenha = await bcrypt.hash(senha, 10);
  const user = new User({ nome, serie, senha: hashedSenha });
  await user.save();
  res.json({ message: 'Usuário registrado com sucesso' });
});

router.post('/login', async (req, res) => {
  const { nome, senha } = req.body;
  const user = await User.findOne({ nome });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const valid = await bcrypt.compare(senha, user.senha);
  if (!valid) return res.status(401).json({ error: 'Senha incorreta' });

  const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
  res.json({ token, nome: user.nome });
});

module.exports = router;
