<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Document;

class DocumentController extends Controller
{
    public function index()
    {
        $books = Document::with(['authors', 'illustrators', 'traductors', 'correctors'])->get();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'og_title' => 'nullable|string|max:255',
            'isbn' => 'nullable|string|max:20',
            'image' => 'required|string',
            'description' => 'nullable|string',
            'comment' => 'nullable|string|max:255',
            'url' => 'required|url',
            'type' => 'nullable|string|max:50',
            'authors' => 'required|array|min:1',
            'authors.*' => 'exists:authors,id',
            'illustrators' => 'nullable|array',
            'illustrators.*' => 'exists:illustrators,id',
            'traductors' => 'nullable|array',
            'traductors.*' => 'exists:traductors,id',
            'correctors' => 'nullable|array',
            'correctors.*' => 'exists:correctors,id',
        ]);

        $document = Document::create($validated);

        $document->authors()->attach($validated['authors']);
        $document->illustrators()->attach($validated['illustrators'] ?? []);
        $document->traductors()->attach($validated['traductors'] ?? []);
        $document->correctors()->attach($validated['correctors'] ?? []);

        return response()->json([
            'message' => 'Document créé avec succès',
            'document' => $document->load(['authors', 'illustrators', 'traductors', 'correctors']),
        ], 201);
    }

    public function show(string $id)
    {
        $book = Document::with(['authors', 'illustrators', 'traductors', 'correctors'])->find($id);

        if ($book) {
            return response()->json($book);
        } else {
            return response()->json(['message' => 'Document not found'], 404);
        }
    }

    public function update(Request $request, string $id)
    {
        $document = Document::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'og_title' => 'nullable|string|max:255',
            'isbn' => 'nullable|string|max:20',
            'image' => 'sometimes|required|string',
            'description' => 'nullable|string',
            'comment' => 'nullable|string|max:255',
            'url' => 'sometimes|required|url',
            'type' => 'nullable|string|max:50',
            'authors' => 'nullable|array',
            'authors.*' => 'exists:authors,id',
            'illustrators' => 'nullable|array',
            'illustrators.*' => 'exists:illustrators,id',
            'traductors' => 'nullable|array',
            'traductors.*' => 'exists:traductors,id',
            'correctors' => 'nullable|array',
            'correctors.*' => 'exists:correctors,id',
        ]);

        $document->update($validated);

        if (isset($validated['authors'])) {
            $document->authors()->sync($validated['authors']);
        }
        if (isset($validated['illustrators'])) {
            $document->illustrators()->sync($validated['illustrators']);
        }
        if (isset($validated['traductors'])) {
            $document->traductors()->sync($validated['traductors']);
        }
        if (isset($validated['correctors'])) {
            $document->correctors()->sync($validated['correctors']);
        }

        return response()->json([
            'message' => 'Document mis à jour avec succès',
            'document' => $document->load(['authors', 'illustrators', 'traductors', 'correctors']),
        ]);
    }

    public function destroy(string $id)
    {
        $document = Document::find($id);

        if ($document) {
            $document->authors()->detach();
            $document->illustrators()->detach();
            $document->traductors()->detach();
            $document->correctors()->detach();
            $document->delete();

            return response()->json(['message' => 'Document deleted successfully']);
        } else {
            return response()->json(['message' => 'Document not found'], 404);
        }
    }

    public function getLast()
    {
        $limit = (int) ($_GET['limit'] ?? 5);

        $books = Document::with(['authors', 'illustrators', 'traductors', 'correctors'])
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get();

        return response()->json($books);
    }
}
